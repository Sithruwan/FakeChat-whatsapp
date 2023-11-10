import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { DisplayComponent } from './display.component';
import { MainHeaderComponent } from './core/main-header/main-header.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { LayoutControllerComponent } from './core/layout-controller/layout-controller.component';
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {FormsModule} from "@angular/forms";
import { ChatContextComponent } from './core/chat-context/chat-context.component';
import { MobileChatContextComponent } from './core/mobile-chat-context/mobile-chat-context.component';
import { ChatManagerComponent } from './core/chat-manager/chat-manager.component';
import { ChatBubbleComponent } from './core/chat-bubble/chat-bubble.component';
import { ChatDownloadComponent } from './core/chat-download/chat-download.component';



@NgModule({
  declarations: [
    DisplayComponent,
    MainHeaderComponent,
    MainFooterComponent,
    LayoutControllerComponent,
    ChatContextComponent,
    MobileChatContextComponent,
    ChatManagerComponent,
    ChatBubbleComponent,
    ChatDownloadComponent,
  ],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    NgxMaterialTimepickerModule,
    FormsModule
  ]
})
export class DisplayModule { }
