import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    let firstName = new FormControl();
    let lastName = new FormControl();
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }
  saveProfile(profileForm){
    alert(`Your profile has been saved as First Name: ${profileForm.firstName} and Last Name: ${profileForm.lastName}`)
  }

}
