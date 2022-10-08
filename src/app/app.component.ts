import { Component, OnInit,NgModule } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,NgForm,Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stage4';
 
    registrationForm:any;
  
    count = 0;
    opt: boolean = true;
    locations: string[] = [];
    checkBoxes = ['first'];
    offshore = ['Chennai', 'Banglore', 'Hyderabad', 'Pune', 'Kochi'];
    onshore = ['US', 'Non Us'];
  
    chooseLocation(as: any) {
      this.radio = false;
      if (as == 1) this.locations = this.offshore;
      else this.locations = this.onshore;
    }
  
    radio: boolean = false;
    checkRadioButton() {
      if (this.locations.length == 0) this.radio = true;
    }
  
    checkBox(s: NgModel) {
      if (!s.value) {
        this.count++;
      } else {
        this.count--;
      }
      
    }
    constructor(private fb:FormBuilder) { }
  
    ngOnInit(): void {
      this.registrationForm=this.fb.group({
        'aname':new FormControl('',[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.pattern("^[A-Za-z -]*"),
        ]),
        'aid':new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern("^[0-9]*$"),
        ]),
        'pid':new FormControl('',[
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(12),
          Validators.pattern("^[a-zA-Z0-9]*"),
        ]),
        'profile':new FormControl('',[
          Validators.required,
        ]),
        'comments':new FormControl('',[
          Validators.required,
        ]),
      })
    }
    submitForm(){
      if(this.registrationForm.valid){
      console.log("form submitted");
      this.registrationForm.reset();
      }
    }
    resetForm(){
      this.registrationForm.reset();
      
    }
  }
  

