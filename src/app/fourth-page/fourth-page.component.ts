import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  familyDataForm: any;
  validationMessages  = {
          'NameOfChild' : {
                            'required': 'Name Of Child is Required'
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
    'NameOfChild' : '',
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
      NameOfChild : ['',[Validators.required]],
      ContactNo : ['',[Validators.required]],
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
      this.router.navigate(['fifth']);
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



