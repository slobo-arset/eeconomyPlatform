import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MainStateService } from './main-state.service';

const ADMIN_MODE_KEY = 'eeconomy.adminMode';
const COMPANY_ID_KEY = 'eeconomy.selectedCompanyId';
const ORIGINAL_USER_KEY = 'eeconomy.originalUser';

@Injectable({
  providedIn: 'root'
})
export class SessionContextService {
  adminMode = true;
  selectedCompanyId: number | null = null;
  selectedCompanyName = '';
  companies: any[] = [];

  private changesSubject = new BehaviorSubject<void>(undefined);
  readonly changes$ = this.changesSubject.asObservable();

  constructor(private mainStateService: MainStateService) {}

  get user(): any {
    return this.mainStateService.getStateBykey('user');
  }

  get isAdmin(): boolean {
    const tip = this.getOriginalUser()?.tip ?? this.user?.tip;
    return Number(tip) === 1 || tip === true || String(tip).toLowerCase() === 'admin';
  }

  get showCompanyWorkspace(): boolean {
    if (!this.isAdmin) {
      return true;
    }
    return !this.adminMode;
  }

  getCompanyId(): number | null {
    return this.user?.company_id ?? this.selectedCompanyId ?? null;
  }

  getOriginalUser(): any {
    const raw = localStorage.getItem(ORIGINAL_USER_KEY);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch {
        localStorage.removeItem(ORIGINAL_USER_KEY);
      }
    }
    return this.user;
  }

  init(): void {
    if (!localStorage.getItem(ORIGINAL_USER_KEY) && this.user) {
      localStorage.setItem(ORIGINAL_USER_KEY, JSON.stringify(this.user));
    }

    const original = this.getOriginalUser();
    if (!original) {
      return;
    }

    if (Number(original.tip) !== 1) {
      this.adminMode = false;
      this.selectedCompanyId = original.company_id ?? null;
      this.emit();
      return;
    }

    const storedMode = localStorage.getItem(ADMIN_MODE_KEY);
    this.adminMode = storedMode === null ? true : storedMode === 'true';
    const storedCompanyId = localStorage.getItem(COMPANY_ID_KEY);
    this.selectedCompanyId = storedCompanyId ? Number(storedCompanyId) : null;
    this.applyCurrentMode();
  }

  onLogin(user: any): void {
    localStorage.setItem(ORIGINAL_USER_KEY, JSON.stringify(user));
    this.adminMode = Number(user.tip) === 1;
    this.selectedCompanyId = Number(user.tip) === 1 ? null : (user.company_id ?? null);
    this.selectedCompanyName = '';
    this.persist();
    this.mainStateService.setAppState({ user });
    this.emit();
  }

  setCompanies(companies: any[]): void {
    this.companies = companies ?? [];
    if (this.selectedCompanyId) {
      const match = this.companies.find((company) => company.id === this.selectedCompanyId);
      this.selectedCompanyName = match?.company_name ?? '';
    }
    this.emit();
  }

  setAdminMode(adminMode: boolean): void {
    this.adminMode = !!adminMode;
    this.persist();
    this.applyCurrentMode();
  }

  setSelectedCompany(companyId: number | null): void {
    this.selectedCompanyId = companyId;
    const match = this.companies.find((company) => company.id === companyId);
    this.selectedCompanyName = match?.company_name ?? '';
    this.persist();
    this.applyCurrentMode();
  }

  clear(): void {
    localStorage.removeItem(ADMIN_MODE_KEY);
    localStorage.removeItem(COMPANY_ID_KEY);
    localStorage.removeItem(ORIGINAL_USER_KEY);
    this.adminMode = true;
    this.selectedCompanyId = null;
    this.selectedCompanyName = '';
    this.companies = [];
    this.mainStateService.clearAll();
    this.emit();
  }

  private applyCurrentMode(): void {
    const original = this.getOriginalUser();
    if (!original) {
      return;
    }

    if (Number(original.tip) === 1 && !this.adminMode && this.selectedCompanyId) {
      this.mainStateService.setAppState({
        user: {
          ...original,
          company_id: this.selectedCompanyId
        }
      });
    } else {
      this.mainStateService.setAppState({ user: original });
    }
    this.emit();
  }

  private persist(): void {
    localStorage.setItem(ADMIN_MODE_KEY, this.adminMode ? 'true' : 'false');
    if (this.selectedCompanyId) {
      localStorage.setItem(COMPANY_ID_KEY, String(this.selectedCompanyId));
    } else {
      localStorage.removeItem(COMPANY_ID_KEY);
    }
  }

  private emit(): void {
    this.changesSubject.next();
  }
}
