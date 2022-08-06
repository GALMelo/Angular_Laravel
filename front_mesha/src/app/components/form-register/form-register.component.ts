import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  name = '';
  email = '';
  cpf = '';
  phone = '';
  constructor() {}

  ngOnInit(): void {
  }

  handleSubmit(event: Event): void
  {
    event.preventDefault();
    console.log(this.name, this.email, this.cpf, this.phone);
  }

}
