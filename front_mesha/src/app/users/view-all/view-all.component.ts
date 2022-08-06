import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
})
export class ViewAllComponent implements OnInit {
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }
  users: any;
  getAllUsers() {
    this.configService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
