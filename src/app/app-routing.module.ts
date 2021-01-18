import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstallGuideComponent } from './jquery/install-guide/install-guide.component';
import { RegisterFormComponent } from './jquery/register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './_guard/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './jquery/grid/grid.component';
import { ChartComponent } from './jquery/chart/chart.component';
import { AngularGridComponent } from './angular/grid/grid.component';
import { AngularSchedulerComponent } from './angular/scheduler/scheduler.component';
import { VueGridComponent } from './vue/grid/grid.component';
import { AngularInputComponent } from './angular/input/input.component';
import { VueChartComponent } from './vue/chart/chart.component';
import { VueFormComponent } from './vue/form/form.component';
import { VueSchedulerComponent } from './vue/scheduler/scheduler.component';
import { AngularChartComponent } from './angular/chart/chart.component';
import { MemberComponent } from './admin/member/member.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'jquery-install-guide', pathMatch: 'full' },
      { path: 'jquery-install-guide', component: InstallGuideComponent },
      { path: 'jquery-register-form', component: RegisterFormComponent },
      { path: 'jquery-grid', component: GridComponent },
      { path: 'jquery-chart', component: ChartComponent },

      { path: 'angular-grid', component: AngularGridComponent },
      { path: 'angular-scheduler', component: AngularSchedulerComponent },
      { path: 'angular-input', component: AngularInputComponent },
      { path: 'angular-chart', component: AngularChartComponent },

      { path: 'vue-grid', component: VueGridComponent },
      { path: 'vue-chart', component: VueChartComponent },
      { path: 'vue-form', component: VueFormComponent },
      { path: 'vue-scheduler', component: VueSchedulerComponent },

      { path: 'admin-member-management', component: MemberComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
