import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/data-access/auth/auth.service';
import { DisplayMessageService } from 'src/app/data-access/message/message.service';
import { SessionContextService } from 'src/app/data-access/state/session-context.service';
import { CompanyService } from 'src/app/data-access/user/company/company.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  items: MenuItem[] = [{ label: 'Moj profil' }];
  passwordForm: FormGroup;
  saving = false;
  showCurrent = false;
  showNew = false;
  showConfirm = false;
  private sessionSub?: Subscription;
  private companyName = '';

  constructor(
    private fb: FormBuilder,
    public sessionContext: SessionContextService,
    private companyService: CompanyService,
    private authService: AuthService,
    private displayMessageService: DisplayMessageService
  ) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.refreshCompany();
    this.sessionSub = this.sessionContext.changes$.subscribe(() => this.refreshCompany());
  }

  ngOnDestroy(): void {
    this.sessionSub?.unsubscribe();
  }

  get user(): any {
    return this.sessionContext.getOriginalUser() ?? this.sessionContext.user;
  }

  get fullName(): string {
    return `${this.user?.name ?? ''} ${this.user?.lastname ?? ''}`.trim();
  }

  get initials(): string {
    const first = (this.user?.name ?? '').trim().charAt(0);
    const last = (this.user?.lastname ?? '').trim().charAt(0);
    return `${first}${last}`.toUpperCase() || 'U';
  }

  get roleLabel(): string {
    return this.sessionContext.isAdmin ? 'Administrator' : 'Zaposleni';
  }

  get activeCompany(): string {
    if (this.sessionContext.isAdmin && this.sessionContext.adminMode) {
      return '—';
    }
    return this.sessionContext.selectedCompanyName || this.companyName || '—';
  }

  handleChangePassword(): void {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      this.displayMessageService.emitError('Potrebno je popuniti sva polja za lozinku.');
      return;
    }

    const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;
    if (newPassword !== confirmPassword) {
      this.displayMessageService.emitError('Nova lozinka i potvrda se ne poklapaju.');
      return;
    }

    const userId = this.user?.id;
    if (!userId) {
      this.displayMessageService.emitError('Korisnik nije pronađen.');
      return;
    }

    this.saving = true;
    this.authService.changePassword({ userId, currentPassword, newPassword }).subscribe({
      next: () => {
        this.saving = false;
        this.passwordForm.reset();
        this.displayMessageService.emitSuccess('Lozinka je uspešno promenjena.');
      },
      error: (err: HttpErrorResponse) => {
        this.saving = false;
        const code = err.error?.message;
        if (code === 'serverError.wrongPassword') {
          this.displayMessageService.emitError('Trenutna lozinka nije ispravna.');
          return;
        }
        if (code === 'serverError.passwordTooShort') {
          this.displayMessageService.emitError('Nova lozinka mora imati najmanje 6 karaktera.');
          return;
        }
        this.displayMessageService.emitError('Promena lozinke nije uspela.');
      }
    });
  }

  private refreshCompany(): void {
    if (this.sessionContext.isAdmin && this.sessionContext.adminMode) {
      this.companyName = '';
      return;
    }

    if (this.sessionContext.selectedCompanyName) {
      this.companyName = this.sessionContext.selectedCompanyName;
      return;
    }

    const companyId = this.sessionContext.getCompanyId();
    if (!companyId) {
      this.companyName = '';
      return;
    }

    this.companyService.getById(companyId).subscribe({
      next: (company) => {
        this.companyName = company?.company_name ?? '';
      }
    });
  }
}
