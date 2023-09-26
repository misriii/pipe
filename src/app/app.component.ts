import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string='';
  date: string='';

  OnNameChange(value: string){
    this.name=value
  }

  OnDateChange(value:string){
    this.date=value
  }
}
