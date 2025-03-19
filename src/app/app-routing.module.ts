import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LightsComponent } from './component/lights/lights.component'; // Create this component
import { LoadingComponent } from './component/loading/loading.component';
import { BlockManagementComponent } from './component/block-management/block-management.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'lights/:building', component: LightsComponent },
    { path: 'loading', component: LoadingComponent },
    { path: 'block-management', component: BlockManagementComponent },
    // Add other routes as needed (e.g., 'analytics', etc.)
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }