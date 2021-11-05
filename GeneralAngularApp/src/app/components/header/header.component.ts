import { Component,Inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,
    public auth:AuthService,
     @Inject(DOCUMENT) private doc:Document
     ) { }

  ngOnInit(): void {
  }

  Logout(){
    this.auth.logout({ returnTo: this.doc.location.origin });
    //this.router.navigate(['/login/']);
  }

}
