import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InstallGuideComponent } from "./jquery/install-guide/install-guide.component";
import { RegisterFormComponent } from "./jquery/register-form/register-form.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./_guard/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { GridComponent } from "./jquery/grid/grid.component";
import { ChartComponent } from "./jquery/chart/chart.component";
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
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "jquery",
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", redirectTo: "install-guide", pathMatch: "full" },
      { path: "install-guide", component: InstallGuideComponent },
      { path: "register-form", component: RegisterFormComponent },
      { path: "grid", component: GridComponent },
      { path: "chart", component: ChartComponent }
    ]
  },
  {
    path: "angular",
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", redirectTo: "grid", pathMatch: "full" },
      { path: "grid", component: AngularGridComponent },
      { path: "scheduler", component: AngularSchedulerComponent },
      { path: "input", component: AngularInputComponent },
      { path: "chart", component: AngularChartComponent },
    ]
  },
  {
    path: "vue",
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", redirectTo: "grid", pathMatch: "full" },
      { path: "grid", component: VueGridComponent },
      { path: "chart", component: VueChartComponent },
      { path: "form", component: VueFormComponent },
      { path: "scheduler", component: VueSchedulerComponent },
    ]
  },
  {
    path: "admin",
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", redirectTo: "member", pathMatch: "full" },
      { path: "member", component: MemberComponent },
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
