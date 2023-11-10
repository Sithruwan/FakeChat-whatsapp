import { Injectable } from '@angular/core';
import {chatDataModel} from "../modules/display/model/chatDataModel";
import html2canvas from "html2canvas";
import domtoimage from 'dom-to-image';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }
  // receiverData = new chatDataModel();
  // SenderData=new chatDataModel();
  private messages: { text: any;  time: any; status:any; user: any; imageURL: any;}[] = [];


  layoutMode?:boolean;
  hideHeader_Switch?: boolean;
  hideFooter_Switch?: boolean;
  DarkTheme_Switch?: boolean;
  profileUrl?: string | ArrayBuffer | null = null;
  contact_name?:string;
  last_time?:string;
  setControllerData(header:boolean,footer:boolean,theme:boolean){
    this.hideHeader_Switch=header;
    this.hideFooter_Switch=footer;
    this.DarkTheme_Switch=theme;
    // console.log('====setCon== '+this.hideHeader_Switch);
    // console.log('====setCon== '+this.hideFooter_Switch);
    // console.log('====setCon== '+this.DarkTheme_Switch);
  }
  layoutChanger(mode:boolean){
    this.layoutMode=mode;
  }
  setContactData(profile:any,name:string,time:string){
    this.profileUrl=profile;
    this.contact_name=name;
    this.last_time=time;
  }
  // setReceiverData(R_data : chatDataModel){
  //   console.log(R_data);
  //   this.receiverData=R_data;
  // }
  //
  // setSenderData(S_data: chatDataModel) {
  //   console.log(S_data);
  //   this.SenderData=S_data;
  // }

  addMessage(data:chatDataModel) {
    let text;
    let time;
    let status;
    let user;
    let imageURL;
    text=data.message;
    time=data.time;
    user=data.userType;
    imageURL = data.imageUrl;
    for(let key in data.status){
      if(!(data.status) || (data.status as any)[key]===true){
          status=key;
      }
    }


    const message = { text, time , status , user , imageURL };
    this.messages.push(message);
    console.log(message);
  }

  getMessages() {
    return this.messages;
  }
  clearAllMsg(){
    while (this.messages.length > 0) {
      this.messages.pop();
    }
  }

  captureAndSaveAsImage(htmlElement: HTMLElement) {
    // Use html2canvas to capture the HTML element
    html2canvas(htmlElement).then((canvas) => {
      // Create a temporary link to download the image
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'chat_image.png';

      // Trigger a click event on the link to initiate the download
      link.click();
    });
  }

private buttonClickSubject = new Subject<string>()
buttonClick$ = this.buttonClickSubject.asObservable();
  triggerButtonClick(){
    this.buttonClickSubject.next('Button clicked');
  }
}
