import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';

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
  // knowledges: Array<any> = [
  //   { name: 'Git', value: 'Git' },
  //   { name: 'React', value: 'React' },
  //   { name: 'PHP', value: 'PHP' },
  //   { name: 'NodeJS', value: 'NodeJS' },
  //   { name: 'DevOps', value: 'DevOps' },
  //   { name: 'Banco de dados', value: 'Banco de dados' },
  //   { name: 'TypeScript', value: 'Typescript' },
  // ];
  knowledges = 'PHP, TypeScript';

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  handleSubmit(event: Event): void {
    event.preventDefault();
    this.configService
      .sendUser(this.name, this.email, this.cpf, this.phone, this.knowledges)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
