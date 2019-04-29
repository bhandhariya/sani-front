import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  persionalDataForm: any;
  public loading = false;
  validationMessages  = {
          'ParmentAddress' : {
                          'required': 'Parment Address is Required',
                          'minlength': '5 Characters is Required'
                        },
          'Mobile' : {
                          'required': 'Mobile No. is Required',
                          'minlength': '10 Digits is Required'
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
    'ParmentAddress' : '',
    'Mobile' : '',
    'LastName' : '',
    'AddmissionDate' : '',
    'File' : ''
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
    this.persionalDataForm = this.fb.group({
      ParmentAddress : ['',[Validators.required,Validators.minLength(5)]],
      Mobile : ['',[Validators.required,Validators.minLength(10)]],
      // LastName : ['',[Validators.required]],
      // AddmissionDate : ['',[Validators.required]],
      // File : ['',[Validators.required]]
    });

    this.persionalDataForm.valueChanges.subscribe(value =>{
      this.logValidationMessages();
    });
  }

  logValidationMessages(group: FormGroup = this.persionalDataForm): void {
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
