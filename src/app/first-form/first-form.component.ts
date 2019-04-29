import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFireStorage } from "angularfire2/storage";
import {  ngf } from "angular-file"
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {
  firstForm: any;
  //  obj={}
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
          'Employer' : {
                          'required': 'Employer is Required'
                        },
          'EmployeeType' : {
                            'required': 'Employee Type is Required'
                          },
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
          'DateOfBirth' : {
                            'required': 'Date Of Birth is Required'
                          },
          'SSN' : {
                    'required': 'SSN Number is Required',
                    'minlength': '4 Digits are Required',
                  },
          'PhoneNumber' :  {
                            'required': 'Phone is Required',
                            'minlength': 'Minimum 10 Digits are Required',
                            'maxlength': 'Maximum 10 Digits are Required'
                          },
          'EmailID' : {
                        'required': 'Email is required',
                        'pattern' : 'Please Enter Valid Email'
                      },
          'Address' : {
                        'minlength': '5 Characters are Required'
                      },
          'ResidentialState' : {
                                  'required': 'Residential State is Required'
                                },
          'ZipCode' : {
                        'minlength': 'Minimum 6 Digits are Required',
                        'maxlength': 'Maximum 6 Digits are Required'
                      },
          'WorkState': {
                          'required': 'Work State is Required'
                        },
          'TimesheetType': {
                      'required': 'Email is Required.'
                  },
          'LineItemType': {
                            'required': 'LineItem Type is Required.'
                          },
          'Class': {
                            'required': 'Class field is Required.'
                          },
          'Vendor': {
                            'required': 'Vendor is Required.'
                          },
          'ProjectStartDate': {
                                'required': 'Project Start Date is Required'
                          },
          'ProjectEndDate' : {
                                'required': 'Project End Date is Required'
                              },
          'LastInvoiceDate' : {
                                'required': 'Last Invoice Date is Required'
                              },
          'EmployeeRole' : {
                                'required': 'Employee Role is Required'
                              },
          'ClientName' : {
                            'required': 'Client Name is Required'
                          },
          'ClientAddress' : {
                                'required': 'Client Address is Required'
                              }
  };
  
  formErrors = {
                'Employer' : '',
                'EmployeeType' : '',
                'FirstName' : '',
                'MiddleName' : '',
                'LastName' : '',
                'DateOfBirth' : '',
                'SSN' : '',
                'PhoneNumber' : '',
                'EmailID' : '',
                'Address' : '',
                'ResidentialState' : '',
                'ZipCode' : '',
                'WorkState': '',
                'TimesheetType': '',
                'LineItemType': '',
                'Class': '',
                'Vendor': '',
                'ProjectStartDate': '',
                'ProjectEndDate' : '',
                'LastInvoiceDate' : '',
                'EmployeeRole' : '',
                'ClientName' : '',
                'ClientAddress' : '',
    };
    submmited: boolean = false ;
    
  
    ngOnInit() {
      this.firstForm = this.fb.group({
        FirstName : ['',[Validators.required]],
        MiddleName : ['',[Validators.required]],
        LastName : ['',[Validators.required]],
        // AddimissionDate : ['',[Validators.required]],
      });
    }
  
  
    onSubmit(){
      alert()
    }
    // download(){
    //   var storage=firebase.storage().ref();
    //   var pdf=storage.child('ghf.pdf');
    //   var data=pdf.getDownloadURL();
    //   data.then(e=>{
    //     console.log(e)
    //   })
    // }
    // upload(){
    
    // }
    // next(){
    //   this.route.navigate(['second']);
    // }
  
    logValidationMessages(group: FormGroup ): void {
      Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.get(key);
          this.formErrors[key] = '';
            if (abstractControl && abstractControl.invalid && (abstractControl.touched)) {
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
