import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Project-Annaya';
  @ViewChild('f') Forms: NgForm;
  displayStyle = 'none';
  displayStyle1 = 'none';
  editRecordId = null;
  formData = [];
  // open = false;
  user = {
    name: '',
    id: '',
    description: '',
    date: '',
  };
  details = {
    name: 'string',
    id: 'string',
    description: 'string',
    date: 'string',
  };
  submitted = false;
  // listofUsers = [];
  clicked = false;

  // ngOnInit() {
  //   this.signupForm1 = new FormArray([]);
  //   this.signupForm = new FormGroup({
  //     Name: new FormControl(null, Validators.required),
  //     Id: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern('^[1-9]+[0-9]*$'),
  //     ]),
  //     Description: new FormControl(null, Validators.required),
  //     Date: new FormControl(null, Validators.required),
  //   });
  // }
  onClick() {
    // (<FormArray>this.signupForm1).push(this.signupForm);
    this.displayStyle = 'none';
    // this.user.name = name;
    // this.user.id = id;
    // this.user.description = description;
    // this.user.date = date;
    // this.listofUsers.push(this.user);
    // this.user.name = '';
    // this.user.id = '';
    // this.user.description = '';
    // this.user.date = '';
    // console.log(this.listofUsers);
  }
  onSubmit() {
    // console.log(this.signupForm1);
    this.submitted = true;
    if (this.editRecordId) {
      this.formData = this.formData.map((data) =>
        data.id === this.editRecordId ? this.Forms.value : data
      );
      this.editRecordId = null;
    } else {
      const id = Date.now();

      const data = {
        id,
        ...this.Forms.value,
      };
      this.formData.push(data);
    }
    this.Forms.reset();
  }
  onbuttonclick() {
    this.clicked = true;
  }
  onClose() {
    // this.open = false;
    this.displayStyle = 'none';
  }
  onOpen() {
    // this.open = true;
    this.displayStyle = 'block';
  }
  // onEdit(user) {
  //   this.displayStyle = 'block';
  //   const { idee, ...data } = user;
  //   this.editRecordId = idee;
  //   this.Forms.setValue(data);
  // }
  onGetDetails(user) {
    this.displayStyle1 = 'block';
    this.details.name = user.Name;
    this.details.id = user.Id;
    this.details.description = user.Description;
    this.details.date = user.Date;
  }
  onDataClose() {
    this.displayStyle1 = 'none';
  }
  // onCloseOverlay() {
  //   this.displayStyle1 = 'none';
  // }
  onDelete(user) {
    this.formData = this.formData.filter((data) => data.id !== user.id);
  }
}
