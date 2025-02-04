import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/shared/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';
import { Network } from 'src/app/shared/models/network';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { ContactService } from 'src/app/shared/services/contact/contact.service';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    ProgressSpinnerModule,
    ToastModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class ContactFormComponent implements OnInit {

  contactForm !: FormGroup;
  isFormSubmitted = false;
  isContactFormSubmittedAndNotErrorOnClientSide = false;

  networks !: Network[];

  contactWays : any;

  constructor(
    private fb : FormBuilder,
    private utilsService: UtilsService,
    private messageService : MessageService,
    private contactService : ContactService
  ){}

  ngOnInit(): void {
    this.initForm();
    this.getSocialMediaNetworks();
    this.initContactWays();
  }

  initForm():void{
    this.contactForm = this.fb.group({
      lastname: ["", Validators.required],
      firstname: ["", Validators.required],
      email: ["", Validators.required],
      town: [''],
      object: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(20)]],
    })
  }

  get formControls(){
    return this.contactForm.controls;
  }

  onContactForm(){

    this.isFormSubmitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.isContactFormSubmittedAndNotErrorOnClientSide = true;

    this.contactService.sendMail(this.contactForm.value)
    .subscribe(
      (result) =>{
        this.isContactFormSubmittedAndNotErrorOnClientSide = false;
        this.messageService.add({severity:'success', detail: result.message});
        this.contactForm.reset();
      },
      (err) => {
        console.log(err);
        this.isContactFormSubmittedAndNotErrorOnClientSide = false;
        this.messageService.add({severity:'info', detail: "Il s'est produit une erreur , veuillez re-essayer plus tard ou écrivez-nous en accédant à la page Contact"});
      }
    )

    this.isFormSubmitted = false;
  }

  getSocialMediaNetworks(){
    this.networks = this.utilsService.getSocialMediaNetWorks();
  }


  initContactWays(){
    this.contactWays = [
      {
        icon: "faPhone",
        label: "Téléphone",
        info: "+221-17-72-84-03-87"
      },
      {
        icon: "faEnvelope",
        label: "Mail",
        info: "contact@amadou-ba.sn"
      }
    ]
  }
}
