import 'zone.js';
import 'reflect-metadata';

//import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AdminPanelModule from './admin-panel/admin.panel.module';


//enableProdMode();
platformBrowserDynamic().bootstrapModule(AdminPanelModule);
