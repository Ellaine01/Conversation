import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username:string;

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
	}

	login(){
		let username = this.username;
	    // localStorage.setItem('username', username);
	    this.router.navigate(['session', username]);
	}

}
