import {Component, Input} from '@angular/core';
import {contactData} from "./model/contactData";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  contactData: contactData={
    profileURL: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1693956637~exp=1693957237~hmac=358ecf8b4724606151f7536c1e4c06eff6d0488cdca4ae7a54ce31b42ea406e1",
    contactName: "Example_Name", // Replace with the appropriate value
    onlineStatus: "Example_Last_seen",
  };



  handleDataFromChild(data: contactData) {
    console.log('Data received from child:', data);

    this.contactData.profileURL=data.profileURL;
    this.contactData.contactName=data.contactName;
    this.contactData.onlineStatus=data.onlineStatus;

  }
}
