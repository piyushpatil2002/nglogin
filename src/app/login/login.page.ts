import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GetapiService} from '../services/getapi.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  email:string=''
  password: string = '';
  constructor(private route: Router,private api: GetapiService){ }
  
  async login(){
    const data = {
      email: this.email,
      password:this.password
    }
    console.log(data)
    // this.route.navigate(['/tabs']);
    await this.api.userlogin(`userLogin?userName=${data.email}&password=${data.password}`)
  }
  // ngOnInit(): void{
  

  //   this.api.apicall().subscribe((data)=>{
  //     console.log("get api data",data)
  //   })
  // }
}
