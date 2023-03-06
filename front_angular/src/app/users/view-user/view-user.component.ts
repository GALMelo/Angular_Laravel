import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  user: any;

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('NOMECOLABORADOR');
    this.getUser(name);
  }

  onChangeValidate($event: any) {
    this.configService.updateUser(this.user.id).subscribe((data) => {
      this.user = data;
    });
  }

  getUser(name: any) {
    this.configService.getUser(name).subscribe((data) => {
      this.user = data;
    });
  }
}
