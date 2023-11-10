import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {DataShareService} from "../../../../Services/data-share.service";
import {contactData} from "../../model/contactData";
@Component({
  selector: 'app-layout-controller',
  templateUrl: './layout-controller.component.html',
  styleUrls: ['./layout-controller.component.scss']
})
export class LayoutControllerComponent implements AfterViewInit{
  @ViewChild('fileInput') fileInput!: ElementRef;
  contactData? : contactData ;
  @Output('contactEmiter')
  contactEmiter = new EventEmitter<contactData>();


  selectedTime: any;
  is24HourFormat: boolean = true;
  isDivHidden?: boolean  ;
  hideHeader_Switch: any;
  hideFooter_Switch: any;
  DarkTheme_Switch: any;

  profilePictureUrl: string | ArrayBuffer | null = null;
  contactName: any;
  lastSeen: any;
constructor(private dataBus : DataShareService) {}

  ngAfterViewInit(): void {
    this.fileInput.nativeElement;
  }
  onTimeSet(event: string) {
    this.selectedTime = event;
    console.log(this.selectedTime);
  }
  changeModeOfView(state:boolean){
    console.log(this.isDivHidden);
    if(state){
      this.isDivHidden=true;
      console.log("desktop");
      this.dataBus.layoutChanger(this.isDivHidden);
      return;
    }else {
      this.isDivHidden=false;
      console.log("mobile");
      this.dataBus.layoutChanger(this.isDivHidden);
      return;
    }
  }
  toggleTimeFormat() {
    this.is24HourFormat=!this.is24HourFormat
    console.log(this.is24HourFormat);
  }

  onCheckboxChange() {
    this.hideHeader_Switch = this.hideHeader_Switch == undefined ? this.hideHeader_Switch = false : this.hideHeader_Switch=this.hideHeader_Switch;
    this.hideFooter_Switch = this.hideFooter_Switch == undefined ? this.hideFooter_Switch = false : this.hideFooter_Switch=this.hideFooter_Switch;
    this.DarkTheme_Switch = this.DarkTheme_Switch == undefined ? this.DarkTheme_Switch = false : this.DarkTheme_Switch=this.DarkTheme_Switch;

    // console.log(this.hideHeader_Switch + ' = '+ typeof this.hideHeader_Switch);
    // console.log(this.hideFooter_Switch);
    // console.log(this.DarkTheme_Switch);
    this.dataBus.setControllerData(this.hideHeader_Switch,this.hideFooter_Switch,this.DarkTheme_Switch);
  }

  // onFileSelected(event: any): void {
  //   console.log('cliked');
  //   const file = event.target.files[0];
  //   console.log(file);
  //   if (file) {
  //     const reader = new FileReader();
  //
  //     reader.onload = (e) => {
  //       if (e.target) {
  //         this.profilePictureUrl = e.target.result as string;
  //         this.contactData= {
  //           profileURL: this.profilePictureUrl,
  //           contactName: this.contactName,
  //           onlineStatus: this.lastSeen
  //         }
  //         this.contactEmiter.emit(this.contactData);
  //       }
  //     };
  //
  //     reader.readAsDataURL(file);
  //   }
  //   console.log(this.profilePictureUrl);
  // }

  onFileSelected(): void {
    const selectedFile = this.fileInput.nativeElement.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          this.profilePictureUrl = e.target.result as string;
          this.contactData = {
            profileURL: this.profilePictureUrl,
            contactName: this.contactName, // Replace with the appropriate value
            onlineStatus: this.lastSeen, // Replace with the appropriate value
          };
          this.contactEmiter.emit(this.contactData);
        }
      };

      reader.readAsDataURL(selectedFile);
    }
  }



}
