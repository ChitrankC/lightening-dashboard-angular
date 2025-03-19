import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LightsComponent } from './component/lights/lights.component'; // Create this component
import { LoadingComponent } from './component/loading/loading.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'lights/:building', component: LightsComponent },
    { path: 'loading', component: LoadingComponent },
    // Add other routes as needed (e.g., 'block-management', 'analytics', etc.)
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }