import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName;
  private lastName;

  constructor() { }

  ngOnInit(): void {
    this.firstName = new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z].*'), this.containsRestrictedWords(['name', 'alias'])]);
    this.lastName = new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
  // a custom validator
  // containsTheWordName(control: FormControl): {[key:string]:any}{
  //   return control.value.includes('name') ? {'restrictedWord': 'name'}: null;
  // }

  containsRestrictedWords(words){
    return (control:FormControl): {[key:string]:any}=>{
      if(!words) return null

      var invalidWords = words.map(w => control.value.includes(w)? w : null).filter(w => w != null)

      return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null;
    }
  }
  saveProfile(formValues){
    if(this.profileForm.valid){
      alert(`Your profile has been saved as First Name: ${formValues.firstName} and Last Name: ${formValues.lastName}`)
    }else{
      alert("All fields are required please!")
    }
  }
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

}
