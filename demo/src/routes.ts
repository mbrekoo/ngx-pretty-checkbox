import { DemoSwitchComponent } from './app/components/demo-switch/demo-switch.component';
import { Routes } from '@angular/router';
import { DemosComponent } from './app/components/demos/demos.component';
import { DemoBasicCheckboxComponent } from './app/components/demo-basic-checkbox/demo-basic-checkbox.component';
import { CheckboxApiComponent } from './app/components/checkbox-api/checkbox-api.component';
import { InterfacesApiComponent } from './app/components/interfaces-api/interfaces-api.component';
import { EnumsApiComponent } from './app/components/enums-api/enums-api.component';
import { DemoColorComponent } from './app/components/demo-color/demo-color.component';

export const routes: Routes = [

  // { path: '', redirectTo: '/main', pathMatch: 'full' },

  {
    path: 'demo',
    component: DemosComponent

  }, {
    path: 'demo/basic-checkbox',
    component: DemoBasicCheckboxComponent

  }, {
    path: 'demo/switch',
    component : DemoSwitchComponent
  }, {
    path: 'demo/colors',
    component : DemoColorComponent
  }, {
    path: 'api/checkbox',
    component: CheckboxApiComponent

  }, {
    path: 'api/interfaces',
    component: InterfacesApiComponent

  }, {
    path: 'api/enums',
    component: EnumsApiComponent

  }, {
    path: '**',
    redirectTo: '/'
  }

];
