import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompanyService } from '../data-access/user/company/company.service';
import { SessionContextService } from '../data-access/state/session-context.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit, OnDestroy {

    items!: MenuItem[];
    adminMode = true;
    selectedCompanyId: number | null = null;
    isAdmin = false;
    private sessionSub?: Subscription;
    private companiesRequested = false;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
      public layoutService: LayoutService,
      private router: Router,
      private companyService: CompanyService,
      public sessionContext: SessionContextService,
      private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
      this.syncFromSession();
      this.ensureCompanies();
      this.sessionSub = this.sessionContext.changes$.subscribe(() => {
        this.syncFromSession();
        this.ensureCompanies();
        this.cdr.markForCheck();
      });
    }

    ngOnDestroy(): void {
      this.sessionSub?.unsubscribe();
    }

    get userName(): string {
      const user = this.sessionContext.getOriginalUser() ?? this.sessionContext.user;
      if (!user) {
        return '';
      }
      return `${user.name ?? ''} ${user.lastname ?? ''}`.trim();
    }

    get roleLabel(): string {
      return this.isAdmin ? 'Administrator' : 'Zaposleni';
    }

    get initials(): string {
      const user = this.sessionContext.getOriginalUser() ?? this.sessionContext.user;
      const first = (user?.name ?? '').trim().charAt(0);
      const last = (user?.lastname ?? '').trim().charAt(0);
      return `${first}${last}`.toUpperCase() || 'U';
    }

    handleAdminModeChange(event: any): void {
      const adminMode = typeof event === 'boolean' ? event : !!event?.checked;
      if (adminMode === this.sessionContext.adminMode) {
        this.adminMode = adminMode;
        return;
      }

      this.adminMode = adminMode;
      this.sessionContext.setAdminMode(adminMode);

      if (!adminMode) {
        this.ensureCompanies();
        if (!this.sessionContext.selectedCompanyId && this.sessionContext.companies.length) {
          this.sessionContext.setSelectedCompany(this.sessionContext.companies[0].id);
        }
      }

      this.cdr.detectChanges();
    }

    handleCompanyChange(companyId: number): void {
      this.sessionContext.setSelectedCompany(companyId);
    }

    logOut(){
      this.sessionContext.clear();
      localStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
    }

    goToProfile(){
      this.router.navigate(['/profile']);
    }

    private syncFromSession(): void {
      this.isAdmin = this.sessionContext.isAdmin;
      this.adminMode = this.sessionContext.adminMode;
      this.selectedCompanyId = this.sessionContext.selectedCompanyId;
    }

    private ensureCompanies(): void {
      if (!this.sessionContext.isAdmin || this.sessionContext.companies.length || this.companiesRequested) {
        return;
      }
      this.companiesRequested = true;
      this.companyService.getAll().subscribe({
        next: (companies) => {
          this.sessionContext.setCompanies(companies);
          if (!this.sessionContext.adminMode && !this.sessionContext.selectedCompanyId && companies?.length) {
            this.sessionContext.setSelectedCompany(companies[0].id);
          }
          this.cdr.detectChanges();
        },
        error: () => {
          this.companiesRequested = false;
        }
      });
    }
}
