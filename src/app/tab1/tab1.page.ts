import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pages: string[] = ['Home','About','Contact'];
  dashBoard = false;
  constructor(private route: Router) { }

  next(){
    this.route.navigate(['/login'])
  }
  toggleDashboard() {
    this.dashBoard = !this.dashBoard;
  }

}
