import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage {
  showToastMessage: boolean = false;
  toastMessage: string = "";
  constructor() { }

  toastBtnClick(){
    this.showToastMessage = true;
    this.toastMessage = "Hola Toast";
  }

}
