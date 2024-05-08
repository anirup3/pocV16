import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isQ1visible=false;
  isQ2visible=false;
  showMsg=false;
  type='';
  years:any=null;

  constructor(public router: Router){}

  showQuestion(){
    this.isQ1visible=true;

  }

  onItemChange(e:any){
    this.type= e.target.value;
    console.log(this.type);

    if(this.type.toLowerCase()==='yes'){
      this.isQ2visible=true;
    }
    else{
      this.isQ2visible=false;
      this.router.navigate(['/loan']);
    }
  }

  navigate(){
    if(this.years!=null)
      this.router.navigate(['/loan']);
  }

  keypressalert(e:any){
    console.log(e.key.length);
    console.log(e.target.value.length);
    // if(!e.target.value.length || !e.key.length){
    //   this.showMsg=true;
    //   this.years=e.target.value?e.target.value:e.key;
    // }
    if(this.years!=null || e.key.length){
      this.showMsg=true;
      //this.years=e.target.value?e.target.value:e.key;
    }
  }
}
