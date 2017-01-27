import { Component } from '@angular/core';

@Component({
    selector:'content-topbar',
    template:`
    <div id="topbar">
      <content-topbar-left></content-topbar-left>
      <content-topbar-right></content-topbar-right>
    </div>
    `
})
export default class ContentTopbarComponent {

}
