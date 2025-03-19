import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // If you have any input fields.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LightingBlockComponent } from './component/lighting-block/lighting-block.component';
import { LightsComponent } from './component/lights/lights.component';
import { LoadingComponent } from './component/loading/loading.component';
import { BlockManagementComponent } from './component/block-management/block-management.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    LightingBlockComponent,
    LightsComponent,
    LoadingComponent,
    BlockManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }