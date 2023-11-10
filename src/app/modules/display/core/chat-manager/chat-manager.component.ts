import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {DataShareService} from "../../../../Services/data-share.service";
import {chatDataModel} from "../../model/chatDataModel";
@Component({
  selector: 'app-chat-manager',
  templateUrl: './chat-manager.component.html',
  styleUrls: ['./chat-manager.component.scss']
})
export class ChatManagerComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  chatImg? : string;

  constructor(private dataBus:DataShareService) {
  }
  chat_data = new chatDataModel;
  sending!: boolean;
  sent!: boolean;
  delivered!: boolean;
  read!: boolean;
  message!:string ;
  time!:string;
  messageR!:string ;
  timeR!:string;
  conatctName!:string;
  title:string ='Receiver';

  hideHeader_Switch: any = false;


  chatData(letter:string) {
    console.log(letter);
    if (letter=='R'){

      // this.messageR = (document.getElementById("message-input-R") as HTMLTextAreaElement).value;
      // this.timeR = (document.getElementById("time-R") as HTMLInputElement).value;
      console.log(this.messageR);
      console.log(this.timeR);
      // console.log('Receiver data=== '+this.sending+' '+this.sent+' '+this.delivered+' '+this.read+' '+this.message+' '+this.time);
      this.chat_data = {
        userType:letter,
        message :this.messageR,
        time: this.timeR,
        status:{
          sending:this.sending,
          sent:this.sent,
          delivered:this.delivered,
          read:this.read,
        },
        imageUrl:this.chatImg,
      }
      this.dataBus.addMessage(this.chat_data);
    }else if(letter=='S'){
      this.sending = (document.getElementById("sending") as HTMLInputElement).checked;
      this.sent= (document.getElementById("sent") as HTMLInputElement).checked;
      this.delivered= (document.getElementById("delivere") as HTMLInputElement).checked;
      this.read= (document.getElementById("read") as HTMLInputElement).checked;
      this.message = (document.getElementById("message-input") as HTMLTextAreaElement).value;
      this.time = (document.getElementById("time") as HTMLInputElement).value;
      console.log('Sender data=== '+this.sending+' '+this.sent+' '+this.delivered+' '+this.read+' '+this.message+' '+this.time);
      this.chat_data = {
        userType:letter,
        message :this.message,
        time: this.time,
        status:{
          sending:this.sending,
          sent:this.sent,
          delivered:this.delivered,
          read:this.read,
        },
        imageUrl:this.chatImg,
      }
      this.dataBus.addMessage(this.chat_data);
    }

  }

  onCheckboxChange() {
    this.hideHeader_Switch = this.hideHeader_Switch == undefined ? this.hideHeader_Switch = false : this.hideHeader_Switch=this.hideHeader_Switch;
    if(this.hideHeader_Switch){
      this.title="Sender";
    }else {
      this.title="Receiver";
    }
  }


  onFileSelected(): void {
    const selectedFile = this.fileInput.nativeElement.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          this.chatImg = e.target.result as string;
          // this.contactData = {
          //   profileURL: this.profilePictureUrl,
          //   contactName: this.contactName, // Replace with the appropriate value
          //   onlineStatus: this.lastSeen, // Replace with the appropriate value
          // };
          // this.contactEmiter.emit(this.contactData);
        }
      };

      reader.readAsDataURL(selectedFile);
    }
  }
}
