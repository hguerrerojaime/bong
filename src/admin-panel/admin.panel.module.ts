import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AdminPanelComponent from './admin.panel.component';
import AppComponent from './app.component';
import ContentBodyComponent from './content.body.component';
import ContentFooterComponent from './content.footer.component';
import ContentTopbarComponent from './content.topbar.component';
import ContentTopbarLeftComponent from './content.topbar.left.component';
import ContentTopbarRightComponent from './content.topbar.right.component';
import ContentWrapperComponent from './content.wrapper.component';
import HeaderComponent from './header.component';
import SidebarLeftComponent from './sidebar.left.component';
import SidebarRightComponent from './sidebar.right.component';

@NgModule({
    imports:[
      BrowserModule
    ],
    exports:[],
    declarations:[
      AdminPanelComponent,
      AppComponent,
      ContentBodyComponent,
      ContentFooterComponent,
      ContentTopbarComponent,
      ContentTopbarLeftComponent,
      ContentTopbarRightComponent,
      ContentWrapperComponent,
      HeaderComponent,
      SidebarLeftComponent,
      SidebarRightComponent
    ],
    bootstrap:[ AppComponent ]
})
export default class AdminPanelModule {

}
