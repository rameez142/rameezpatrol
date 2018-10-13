import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { DxMenuModule,DxContextMenuModule,DxSelectBoxModule,DxPopupModule,DxDataGridModule } from 'devextreme-angular';
import {DxButtonModule ,DxTemplateModule,DxLoadIndicatorModule } from 'devextreme-angular';
import {DxLoadPanelModule, DxTabPanelModule,DxCheckBoxModule} from 'devextreme-angular';
import { CommonService } from './services/common.service';
import { PatrolCarsinventoryComponent } from './maintainence/inventory/patrolcarsinventory/patrolcarsinventory.component';
import { DispatchComponent } from './dispatcher/dispatch/dispatch.component';
import { PatrolcarsComponent } from './maintainence/patrolcars/patrolcars.component';
import { HandheldsComponent } from './maintainence/handhelds/handhelds.component';
import { AccessoriesComponent } from './maintainence/accessories/accessories.component';
import { HandheldinventoryComponent } from './maintainence/inventory/handheldinventory/handheldinventory.component';
import { AccessoryinventoryComponent } from './maintainence/inventory/accessoryinventory/accessoryinventory.component';
import { EmployeesComponent } from './dispatcher/employees/employees.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PatrolCarsinventoryComponent,
    DispatchComponent,
    DispatchComponent,
    PatrolcarsComponent,
    HandheldsComponent,
    AccessoriesComponent,
    HandheldinventoryComponent,
    AccessoryinventoryComponent,
    EmployeesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,DxSelectBoxModule,DxContextMenuModule,DxMenuModule,
    DxPopupModule,DxDataGridModule,DxButtonModule ,DxTemplateModule,
    DxLoadIndicatorModule,DxLoadPanelModule, DxTabPanelModule,
    DxCheckBoxModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'patrolcars', component: PatrolcarsComponent },
      { path: 'deviceinventory', component: PatrolCarsinventoryComponent },
      { path: 'hadheld', component: HandheldsComponent },
      { path: 'accessory', component: AccessoriesComponent },
      { path: 'handheldinvent', component: HandheldinventoryComponent },
      { path: 'accessoryinvent', component: AccessoryinventoryComponent },
      { path: 'employee', component: EmployeesComponent },

      {path: 'dispatch', component: DispatchComponent}
    ])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
