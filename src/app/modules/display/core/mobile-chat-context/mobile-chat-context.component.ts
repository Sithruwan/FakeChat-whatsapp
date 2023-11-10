import {Component, Input, OnInit} from '@angular/core';
import {DataShareService} from "../../../../Services/data-share.service";
import {contactData} from "../../model/contactData";

@Component({
  selector: 'app-mobile-chat-context',
  templateUrl: './mobile-chat-context.component.html',
  styleUrls: ['./mobile-chat-context.component.scss']
})
export class MobileChatContextComponent implements OnInit{

  @Input()
  contact_data?:contactData;
  title1="Sender";
  title2="Receiver";

  constructor(public dataBus : DataShareService) {
  }


  downloadIMG() {

      // Call the capture method of the shared service
      const chatContainer = document.querySelector('.center'); // Adjust the selector as needed
      if (chatContainer) {
        this.dataBus.captureAndSaveAsImage(chatContainer as HTMLElement);
      }
    }

  ngOnInit(): void {
    this.dataBus.buttonClick$.subscribe((data)=>{
      this.downloadIMG();
      console.log(data);
    })
  }

}
