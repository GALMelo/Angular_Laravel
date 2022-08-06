import { Component, OnInit } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'app-form-register',
=======
  selector: 'form-register',
>>>>>>> 7fd0af49386b8b04014c0adb5c073ea2b5e3b46a
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  name = '';
  email = '';
  cpf = '';
  phone = '';
  constructor() {}
>>>>>>> 7fd0af49386b8b04014c0adb5c073ea2b5e3b46a

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  handleSubmit(event: Event): void
  {
    event.preventDefault();
    console.log(this.name, this.email, this.cpf, this.phone);
  }

>>>>>>> 7fd0af49386b8b04014c0adb5c073ea2b5e3b46a
}
