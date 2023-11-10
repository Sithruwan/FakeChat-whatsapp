import {Component, Input, OnInit} from '@angular/core';
import {DataShareService} from "../../../../Services/data-share.service";
import {contactData} from "../../model/contactData";

@Component({
  selector: 'app-chat-context',
  templateUrl: './chat-context.component.html',
  styleUrls: ['./chat-context.component.scss']
})
export class ChatContextComponent implements OnInit{
  @Input()
  contact_data?:contactData;
  ngOnInit(): void {
    this.dataBus.buttonClick$.subscribe((data)=>{
      console.log(data);
      this.downloadIMG();
    })
  }
  constructor(public dataBus : DataShareService) {

  }
  downloadIMG() {

    // Call the capture method of the shared service
    const chatContainer = document.querySelector('.right'); // Adjust the selector as needed
    if (chatContainer) {
      this.dataBus.captureAndSaveAsImage(chatContainer as HTMLElement);
    }
  }


}
