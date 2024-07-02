import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {GetapiService} from '../services/getapi.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  email:string=''
  password: string = '';
  isLoginError: boolean = false;
  authError:string=''
  loginForm = new FormGroup({
          email:new FormControl('',[Validators.required,Validators.email]),
          password:new FormControl('',[Validators.required]),
  })
  constructor(private route: Router,private api: GetapiService){ 

  }
  
  async login(){
    let formData=this.loginForm.value
    
    // console.log(data)
    // this.route.navigate(['/tabs']);
    let response:any = await this.api.userlogin(`userLogin?userEmail=${formData.email}&password=${formData.password}`)

    if(response  && response.body.length){
      console.warn("User Logged In")
      this.route.navigate(['/tabs'])
    }
    else{
      console.warn("Login Failed")  
      this.isLoginError=true
      this.authError="Invalid User"
      await this.api.presentToast({
        message: 'Invalid user!',
        duration: 3000,
        position: 'top'
      });
      
    }
  }
}
