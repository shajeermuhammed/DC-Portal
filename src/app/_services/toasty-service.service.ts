import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { Subject, Observable, Subscription } from 'rxjs/Rx';

@Injectable()
export class ToastyServiceService {

  constructor(
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig) { }

  public toastOptions: ToastOptions;

  addToast(title,msg) {
    let interval = 1000;
    let timeout = 5000;
    let seconds = timeout / 1000;
    let subscription: Subscription;

    this.toastOptions = {
      title: title,
      msg: msg,
      showClose: true,
      timeout: timeout,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
        // Run the timer with 1 second iterval
        let observable = Observable.interval(interval).take(seconds);
        // Start listen seconds beat
        subscription = observable.subscribe((count: number) => {
          // Update title of toast
          // toast.title = this.getTitle(seconds - count - 1);
          // Update message of toast
          // toast.msg = this.getMessage(seconds - count - 1);
        });

      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
        // Stop listenning
        subscription.unsubscribe();
      }
    }
  }

  showToast(type,title,msg){
    this.addToast(title,msg);
    switch (type) {
      case 'default': this.toastyService.default(this.toastOptions); break;
      case 'info': this.toastyService.info(this.toastOptions); break;
      case 'success': this.toastyService.success(this.toastOptions); break;
      case 'wait': this.toastyService.wait(this.toastOptions); break;
      case 'error': this.toastyService.error(this.toastOptions); break;
      case 'warning': this.toastyService.warning(this.toastOptions); break;
  }
  }
}
