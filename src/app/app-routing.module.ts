import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InstallGuideComponent } from "./jquery/install-guide/install-guide.component";
import { RegisterFormComponent } from "./jquery/register-form/register-form.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./_guard/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { GridComponent } from "./jquery/grid/grid.component";
import { ChartComponent } from "./jquery/chart/chart.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", redirectTo: "install-guide", pathMatch: "full" },
      { path: "install-guide", component: InstallGuideComponent },
      { path: "register-form", component: RegisterFormComponent },
      { path: "grid", component: GridComponent },
      { path: "chart", component: ChartComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
