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

  constructor(private configService: ConfigService) {}

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
