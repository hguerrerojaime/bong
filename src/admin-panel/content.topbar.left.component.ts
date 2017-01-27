import { Component } from '@angular/core';

@Component({
    selector:'content-topbar-left',
    template:`
      <div class="topbar-left">
        <ol class="breadcrumb">
          <li class="crumb-active">
            <a href="dashboard.html">Dashboard</a>
          </li>
          <li class="crumb-icon">
            <a href="dashboard.html">
              <span class="glyphicon glyphicon-home"></span>
            </a>
          </li>
          <li class="crumb-link">
            <a href="dashboard.html">Home</a>
          </li>
          <li class="crumb-trail">Dashboard</li>
        </ol>
      </div>
    `
})
export default class ContentTopbarLeftComponent {

}
