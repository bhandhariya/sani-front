import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
<<<<<<< HEAD
import { AngularFireStorage } from "angularfire2/storage";
import {  ngf } from "angular-file"
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
=======
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
>>>>>>> a1f64ed2b25fc607b5d2db02b021fc4db1a4bd38

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  firstForm: any;
  public loading = false;
  downloadURL: Observable<string>;
  
  constructor(private route:Router,private fb: FormBuilder,private storage:AngularFireStorage) { }
  uploadImage(event){
    const file = event.target.files[0];
    var randomString=Math.floor(Date.now() / 1000);
    const filePath = 'sunny'+randomString;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(
      finalize(() =>{ this.downloadURL = fileRef.getDownloadURL()
      this.downloadURL.subscribe(e=>{
        console.log(e)
      })
      } )
   )
  .subscribe(e=>{
    
  })
  }
  validationMessages  = {
          'FirstName' : {
                          'required': 'First Name is Required',
                          'minlength': '5 Characters is Required'
                        },
          'MiddleName' : {
                          'required': 'Middle Name is Required',
                          'minlength': '5 Characters is Required'
                        },
          'LastName' : {
                            'required': 'Last Name is Required',
                            'minlength': '3 Characters is Required'
                          },
          'AddmissionDate' : {
                            'required': 'Addmission Date is Required'
                          },
          'File' : {
                    'required': 'File is Required'
                  }
  };
  
  formErrors = {
                'FirstName' : '',
                'MiddleName' : '',
                'LastName' : '',
                'AddmissionDate' : '',
                'File' : ''
    };
<<<<<<< HEAD
    submmited: boolean = false ;
    
=======
  submmited: boolean = false;

  constructor(private router:Router,private fb: FormBuilder) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'MM/DD/YYYY'
      });
    }
>>>>>>> a1f64ed2b25fc607b5d2db02b021fc4db1a4bd38
  
    ngOnInit() {
      this.firstForm = this.fb.group({
        FirstName : ['',[Validators.required]],
        MiddleName : ['',[Validators.required]],
        LastName : ['',[Validators.required]],
        AddmissionDate : ['',[Validators.required]],
        File : ['',[Validators.required]]
      });

      this.firstForm.valueChanges.subscribe(value =>{
        this.logValidationMessages();
      });
    }
  
  
    onSubmit(formData){
      this.submmited = true;
      this.logValidationMessages();
      if(this.firstForm.valid){
        console.log(formData);
        this.router.navigate(['second']);
      }
    }
  
    logValidationMessages(group: FormGroup = this.firstForm): void {
      Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.get(key);
          this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid && (abstractControl.touched || this.submmited)) {
              const messages = this.validationMessages[key];
              for (const errorKey in abstractControl.errors) {
                if (errorKey) {
                  this.formErrors[key] += messages[errorKey] + ' ';
                }
              }
            }
            if (abstractControl instanceof FormGroup) {
              this.logValidationMessages(abstractControl);
            } 
        });
    }

}
