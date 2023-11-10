import {Component, Input} from '@angular/core';
import {DataShareService} from "../../../../Services/data-share.service";

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent {
  @Input() message: any;
constructor(public dataBus : DataShareService) {
}


}
