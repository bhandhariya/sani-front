import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  firstForm: any;
  //  obj={}
  public loading = false;
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
          'AddmissionDate' : {
                            'required': 'Addmission Date is Required'
                          },
          'File' : {
                    'required': 'File is Required'
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
                'AddmissionDate' : '',
                'File' : '',
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
  submmited: boolean = false;

  constructor(private route:Router,private fb: FormBuilder) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'MM/DD/YYYY'
      });
    }
  
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
      }
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
