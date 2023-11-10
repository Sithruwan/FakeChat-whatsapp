import { Component } from '@angular/core';
import {DataShareService} from "../../../../Services/data-share.service";

@Component({
  selector: 'app-chat-download',
  templateUrl: './chat-download.component.html',
  styleUrls: ['./chat-download.component.scss']
})
export class ChatDownloadComponent {
  constructor(private dataBus:DataShareService) {
  }
  resetChat() {
    this.dataBus.clearAllMsg();
  }

  OnClick() {
    this.dataBus.triggerButtonClick();
  }
}
