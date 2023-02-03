import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  paymentForm!: FormGroup;
  validationError: string[] = [];
  
// J'ai ajouté ReactiveFormModulen dans paymenet-form.ts
  // injecter dans constructor Formbuilder qui vient de angular forms
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ){}

  ngOnInit(){
    // on a appelé une fonction

    this.initPaymentForm();

  }

  initPaymentForm(){
    this.paymentForm = this.formBuilder.group({
      
      card_username: [null, [Validators.required]],
      card_number: [null, [Validators.required]],
      card_expiration: [null, [Validators.required]],
      card_cvv: [null, [Validators.required]]
    });
  }


  pay() {

    this.validationError = [];
    // console.log(this.paymentForm.value);

    if(this.paymentForm.invalid) {
      Object.keys(this.paymentForm.controls).forEach((input) => {
        const currentInput = this.paymentForm.get(input);
        if(currentInput && currentInput.status === "INVALID"){
          this.validationError.push(input);
        }
      })

      console.log(this.validationError);
    }else {
      // Créer une commande (à la création de la commande le panier est reset)
      // Rediriger vers la page payment success
      this.router.navigate(['/validation-commande']);

    }


  }
}
