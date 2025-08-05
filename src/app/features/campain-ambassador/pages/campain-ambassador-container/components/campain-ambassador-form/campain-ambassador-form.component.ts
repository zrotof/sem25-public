import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AmbassadorService } from 'src/app/shared/services/ambassador/ambassador.service';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { COUNTRY_FLAGS_AND_DIAL_CODES } from 'src/app/shared/constants/country-flags-and-dial-codes';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-campain-ambassador-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    InputTextModule,
    NgOptimizedImage,
    DropdownModule,
    ToastModule
  ],
  templateUrl: './campain-ambassador-form.component.html',
  styleUrls: ['./campain-ambassador-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})

export class CampainAmbassadorFormComponent implements OnInit {

  protected readonly COUNTRY_FLAGS_AND_DIAL_CODES = COUNTRY_FLAGS_AND_DIAL_CODES

  campainAmbassadorForm !: FormGroup;
  isFormSubmitted = false;

  iscampainAmbassadorFormSubmittedAndNotErrorOnClientSide = false;

  constructor(
    private fb: FormBuilder,
    private ambassadorService: AmbassadorService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.campainAmbassadorForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      selectedCountry: [this.COUNTRY_FLAGS_AND_DIAL_CODES[30]],
      phone: ["", Validators.required],
      town: ['', Validators.required]
    })
  }

  get formControls() {
    return this.campainAmbassadorForm.controls;
  }

  onCampainAmbassadorForm(): void {

    this.isFormSubmitted = true;

    if (this.campainAmbassadorForm.invalid) {
      return;
    }

    const ambassadorToSave = {
      firstname: this.campainAmbassadorForm.controls['firstname'].value,
      lastname: this.campainAmbassadorForm.controls['lastname'].value,
      email: this.campainAmbassadorForm.controls['email'].value,
      town: this.campainAmbassadorForm.controls['town'].value,
      phone: this.campainAmbassadorForm.controls['phone'].value,
      code: this.campainAmbassadorForm.controls['selectedCountry'].value.dialCode,
    }

    this.iscampainAmbassadorFormSubmittedAndNotErrorOnClientSide = true;

    this.ambassadorService.addAmbassador(ambassadorToSave)
      .subscribe(
        (result) => {
          this.iscampainAmbassadorFormSubmittedAndNotErrorOnClientSide = false;
          this.messageService.add({ severity: 'success', detail: result.message, life: 10000 });
          const currentCountry = this.campainAmbassadorForm.controls['selectedCountry'].value;
          this.campainAmbassadorForm.reset();
          this.campainAmbassadorForm.controls['selectedCountry'].setValue(currentCountry);
          this.campainAmbassadorForm.updateValueAndValidity();
        },
        (err) => {
          this.iscampainAmbassadorFormSubmittedAndNotErrorOnClientSide = false;
          this.messageService.add({ severity: 'info', detail: "Il s'est produit une erreur , veuillez re-essayer plus tard ou écrivez-nous en accédant à la page Contact", life: 10000 });
        }
      )

    this.isFormSubmitted = false;

  }
}
