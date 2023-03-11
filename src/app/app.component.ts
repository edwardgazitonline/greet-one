import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
hidePicture() {
throw new Error('Method not implemented.');
}
  title = 'greet-one';
  firstNameControl: any;
  lastNameControl: any;
pic: any;
edwarsname: any;
Image: any;
hide: any;
  changeName() {
    this.firstNameControl.setValue('Initial' + ' EdwardGazitsFirstName');
    this.lastNameControl.setValue('edwardsLastName');
  }
}
