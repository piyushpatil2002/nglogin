import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Router} from '@angular/router'
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  url = `http://127.0.0.1:1880/`
  isLoginError: boolean = false;
  constructor(private http: HttpClient,private route: Router,private toastController: ToastController) { }

  // apicall()
  // {
  //   return this.http.get('http://127.0.0.1:1880/userLogin');
  // }
  async userlogin(endPoint: string,) {
    // console.log(data)
    let result = new Promise((resolve, reject) => {
      this.http.get(this.url + endPoint,
        { observe: 'response' }
      ).subscribe((result:any) => {
        resolve(result);
  
      })
    })
    let timeoutPromise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(false)
      }, 15000);  
    })
    let response = await Promise.race([result,timeoutPromise])
    return response
  }
  async presentToast(msgobj:{message:string,duration:number,position:'top'|'middle'|'bottom'}) {
    const toast = await this.toastController.create(msgobj);

    await toast.present();
  }
}
