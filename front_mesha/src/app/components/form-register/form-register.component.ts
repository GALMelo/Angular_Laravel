import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent implements OnInit {
  name = '';
  email = '';
  cpf = '';
  phone = '';
  knowledges: Array<any> = [
    { name: 'Git', value: 'Git', selected: false, disabled: false },
    { name: 'React', value: 'React', selected: false, disabled: false },
    { name: 'PHP', value: 'PHP', selected: false, disabled: false },
    { name: 'NodeJS', value: 'NodeJS', selected: false, disabled: false },
    { name: 'DevOps', value: 'DevOps', selected: false, disabled: false },
    {
      name: 'Banco de dados',
      value: 'Banco de dados',
      selected: false,
      disabled: false,
    },
    {
      name: 'TypeScript',
      value: 'Typescript',
      selected: false,
      disabled: false,
    },
  ];

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}
  onChangeKnowledge($event: any) {
    const value = $event.target.value;
    const isChecked = $event.target.checked;

    this.knowledges = this.knowledges.map((know) => {
      if (this.getCountSelected(this.knowledges) >= 3) {
        this.applyDisable(this.knowledges, true);
      } else {
        this.applyDisable(this.knowledges, false);
      }
      if (know.value === value) {
        know.selected = isChecked;
        return know;
      }
      return know;
    });
  }

  getCountSelected(knowledges: Array<any>) {
    let selecteds = 0;
    knowledges.forEach((know) => {
      selecteds += know.selected ? 1 : 0;
    });
    return selecteds;
  }

  applyDisable(knowledges: Array<any>, value: boolean) {
    knowledges.forEach((know) => {
      if (!know.selected) {
        know.disabled = value;
      }
    });
  }

  cpfValidator(cpf: string) {
    // Remove qualquer caracter que não seja número do CPF
    const cpfLimpo = this.cpf.replace(/[^\d]+/g, '');

    // Verifica se o CPF possui 11 dígitos
    if (cpfLimpo.length !== 11) {
      return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    const primeiroDV = resto === 10 || resto === 11 ? 0 : resto;

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    const segundoDV = resto === 10 || resto === 11 ? 0 : resto;

    // Verifica se os dígitos verificadores calculados são iguais aos dígitos verificadores do CPF
    if (
      parseInt(cpfLimpo.charAt(9)) === primeiroDV &&
      parseInt(cpfLimpo.charAt(10)) === segundoDV
    ) {
      return true;
    } else {
      return false;
    }
  }

  emailValidator(email: string) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  }

  handleSubmit(event: Event): void {
    let response = '';
    this.knowledges.forEach((know) => {
      if (know.selected) response += know.name + ', ';
    });
    event.preventDefault();
    if (
      this.cpfValidator(this.cpf) == true &&
      this.emailValidator(this.email) == true
    ) {
      this.configService
        .sendUser(
          this.name,
          this.email,
          this.cpf,
          this.phone,
          response.slice(0, response.length - 2)
        )
        .subscribe(
          () => {
            this.router.navigate(['/registros']);
          },
          (error) => {
            console.log(error.error.message);
            if (error.error.message === 'CPF inválido') {
              alert('CPF inválido');
            }
            if (error.error.message === 'Email inválido') {
              alert('Email inválido');
            }
            if (error.error.message === 'Usuário já existe') {
              alert('Usuário já existe');
            }
          }
        );
    } else {
      if (this.cpfValidator(this.cpf) == false) {
        alert('CPF inválido');
      }
      if (this.emailValidator(this.email) == false) {
        alert('Email inválido');
      }
    }
  }
}
