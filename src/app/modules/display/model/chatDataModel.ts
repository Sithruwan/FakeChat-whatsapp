export class chatDataModel {
  userType?:string;
  message ?:string;
  time?: string;
  status?:{
    sending:boolean;
    sent:boolean;
    delivered:boolean;
    read:boolean;
  }
  imageUrl?:string;
}
