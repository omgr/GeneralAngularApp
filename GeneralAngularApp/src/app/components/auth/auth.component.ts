import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(u => {
      console.log(u);
    });
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("=========came into auth component==============");
      console.log(params);
      //alert(params.code);
    });
    
  }

}
