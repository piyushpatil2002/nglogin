import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  url = `http://127.0.0.1:1880/`
  constructor(private http: HttpClient) { }

  // apicall()
  // {
  //   return this.http.get('http://127.0.0.1:1880/userLogin');
  // }
  async userlogin(endPoint: string,) {
    // console.log(data)
    let result = new Promise((resolve, reject) => {
      this.http.get(this.url + endPoint,
        { observe: 'response' }
      ).subscribe((result) => {
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
}
