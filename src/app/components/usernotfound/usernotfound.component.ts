import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernotfound',
  templateUrl: './usernotfound.component.html',
  styleUrls: ['./usernotfound.component.css']
})
export class UsernotfoundComponent implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
  regresar(){
    this.nav.navigate([''])
  }

}
