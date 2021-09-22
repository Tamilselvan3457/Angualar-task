import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service'; 


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
     onecomponent:any
  constructor( private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.onecomponent().subscribe(data=>{
      this.onecomponent=data;
    })
    
  }

}
