import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AmbassadorService } from 'src/app/shared/services/ambassador/ambassador.service';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-campain-ambassador-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  templateUrl: './campain-ambassador-form.component.html',
  styleUrls: ['./campain-ambassador-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class CampainAmbassadorFormComponent implements OnInit {

  campainAmbassadorForm !: FormGroup;
  isFormSubmitted = false;

  iscampainAmbassadorFormSubmittedAndNotErrorOnClientSide = false; 

  constructor(
    private fb : FormBuilder,
    private ambassadorService: AmbassadorService,
    private messageService : MessageService, 
  ){}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
    this.campainAmbassadorForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      town: ['', Validators.required]
    })
  }

  get formControls(){
    return this.campainAmbassadorForm.controls;
  }

  onCampainAmbassadorForm() : void {

    this.isFormSubmitted = true;

    if(this.campainAmbassadorForm.invalid){
      return;
    }

    const ambassadorToSave = {
      firstname : this.campainAmbassadorForm.controls['firstname'].value,
      lastname : this.campainAmbassadorForm.controls['lastname'].value,
      email : this.campainAmbassadorForm.controls['email'].value,
      town : this.campainAmbassadorForm.controls['town'].value,
      appType : 'Site web'
    }

    this.iscampainAmbassadorFormSubmittedAndNotErrorOnClientSide = true;

    this.ambassadorService.addAmbassador(ambassadorToSave)
    .subscribe(
      (result) =>{
        this.iscampainAmbassadorFormSubmittedAndNotErrorOnClientSide = false;
        this.messageService.add({severity:'success', detail: result.message});
        this.campainAmbassadorForm.reset();
      },
      (err) => {
        this.iscampainAmbassadorFormSubmittedAndNotErrorOnClientSide = false;
        this.messageService.add({severity:'info', detail: "Il s'est produit une erreur , veuillez re-essayer plus tard ou écrivez-nous en accédant à la page Contact"});
      }
    )

    this.isFormSubmitted = false;

  }
}
