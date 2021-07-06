import { HospitalService } from 'src/app/services/hospital.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent implements OnInit {

  constructor(private router:Router,private service:HospitalService) { }
  loggedInUser:string=null;
  ngOnInit(): void {
    this.loggedInUser=localStorage.getItem('loggedInUser');
    console.log(this.loggedInUser);
    if(this.loggedInUser==''){
      this.loggedInUser=null;
    }
  }
  ngAfterViewInit(){
  }
  logout(){
   /*  localStorage.removeItem("loggedInUser");
    localStorage.removeItem("hospitalName");
    this.router.navigate(["/department-login"]); */
    this.service.HospitallogoutUser();
  }
}
