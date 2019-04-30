import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  familyDataForm: any;
  validationMessages  = {
          'SpouseName' : {
                            'required': 'Spouse Name is Required'
                          },
          'SpouseAge' : {
                          'required': 'Spouse Age is Required'
                        },
          'SpouseOccupation' : {
                                  'required': 'Spouse Occupation is Required'
                                },
          'SpouseAddress' : {
                                'required': 'Spouse Address is Required',
                                'minlength': '5 Characters is Required'
                              },
          'LivingStatus' : {
                              'required': 'Living Status is Required'
                            },
          'NoOfChildren' : {
                              'required': 'No Of Children is Required'
                            },
          'GuardianName' : {
                              'required': 'Guardian Name No. is Required'
                            },
          'ContactNo' : {
                          'required': 'Contact No. is Required',
                          'minlength': '10 Digits is Required'
                        },
          'Email' : {
                      'required': 'Email is Required',
                      'email': 'Invalid email'
                    },
          'Address' : {
                        'required': 'Address is Required'
                      }
  }; 
  
  formErrors = {
    'SpouseName' : '',
    'SpouseAge' : '',
    'SpouseOccupation' : '',
    'SpouseAddress' : '',
    'LivingStatus' : '',
    'NoOfChildren' : '',
    'GuardianName' : '',
    'ContactNo' : '',
    'Email' : '',
    'Address' : ''
  };
  submmited: boolean = false;
  constructor(private router:Router,private fb: FormBuilder) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'MM/DD/YYYY'
      });
   }

   ngOnInit() {
    this.familyDataForm = this.fb.group({
      SpouseName : ['',[Validators.required]],
      SpouseAge : ['',[Validators.required]],
      SpouseOccupation : ['',[Validators.required]],
      SpouseAddress : ['',[Validators.required,Validators.minLength(5)]],
      LivingStatus : ['',[Validators.required]],
      NoOfChildren : ['',[Validators.required]],
      GuardianName : ['',[Validators.required]],
      ContactNo : ['',[Validators.required,Validators.minLength(10)]],
      Email : ['',[Validators.required,Validators.email]],
      Address : ['',[Validators.required]]
    });

    this.familyDataForm.valueChanges.subscribe(value =>{
      this.logValidationMessages();
    });
  }

  onSubmit(formData){
    this.submmited = true;
    this.logValidationMessages();
    if(this.familyDataForm.valid){
      console.log(formData);
      this.router.navigate(['fourth']);
    }
  }

  logValidationMessages(group: FormGroup = this.familyDataForm): void {
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
