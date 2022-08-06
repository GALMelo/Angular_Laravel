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
  knowledges: Array<any> = [
    { name: 'Git', value: 'Git', selected: false },
    { name: 'React', value: 'React', selected: false },
    { name: 'PHP', value: 'PHP', selected: false },
    { name: 'NodeJS', value: 'NodeJS', selected: false },
    { name: 'DevOps', value: 'DevOps', selected: false },
    { name: 'Banco de dados', value: 'Banco de dados', selected: false },
    { name: 'TypeScript', value: 'Typescript', selected: false },
  ];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}
  onChangeKnowledge($event: any) {
    const value = $event.target.value;
    const isChecked = $event.target.checked;

    this.knowledges = this.knowledges.map((know) => {
      if (know.value === value) {
        know.selected = isChecked;
        return know;
      }
      return know;
    });
  }

  handleSubmit(event: Event): void {
    let response = '';
    this.knowledges.forEach((know) => {
      if (know.selected) response += know.name + ', ';
    });
    event.preventDefault();
    this.configService
      .sendUser(
        this.name,
        this.email,
        this.cpf,
        this.phone,
        response.slice(0, response.length - 2)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
