import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName:new FormControl(),
      email:new FormControl(),
      skills:new FormGroup({
        SkillName:new FormControl(),
        experienceInYears:new FormControl(),
        proficiency:new FormControl(),
      })
    })

    
  }
  onSubmit(): void {
    console.log('OnSubmit'+this.employeeForm.value);
    console.log(JSON.stringify(this.employeeForm.value))
  }

}
