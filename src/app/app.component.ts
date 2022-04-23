import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    uname : new FormControl('',[Validators.required, Validators.minLength(3)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    body : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required, Validators.minLength(10)]),
    date : new FormControl('',[Validators.required])
  });
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }

}
