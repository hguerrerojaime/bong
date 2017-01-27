import { Component } from '@angular/core';

@Component({
    selector:'content-wrapper',
    template:`
       <content-topbar></content-topbar>
       <content-body></content-body>
       <content-footer></content-footer>
    `
})
export default class ContentWrapperComponent {

}
