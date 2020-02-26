import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./_material/angular-material.module";
import { LoadingProgressModule } from "./_loading-progress/loading-progress.module";
import { HeaderToolbarComponent } from "./home/header-toolbar/header-toolbar.component";
import { BodySidenavComponent } from "./home/body-sidenav/body-sidenav.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RegisterFormModule } from "./jquery/register-form/register-form.module";
import { GridModule } from "./jquery/grid/grid.module";
import { ChartModule } from './jquery/chart/chart.module';
// import { HttpClientModule } from '@angular/common/http';
import { InstallGuideModule } from './jquery/install-guide/install-guide.module';
import { AngularModule } from './angular/angular.module';
import { VueModule } from './vue/vue.module';
import { MemberModule } from './admin/member/member.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderToolbarComponent,
		BodySidenavComponent,
		LoginComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		AppRoutingModule,
		AngularMaterialModule,
		LoadingProgressModule,
		RegisterFormModule,
		GridModule,
		ChartModule,
		InstallGuideModule,
		AngularModule,
		VueModule,
		MemberModule
		// import HttpClientModule after BrowserModule.
		// HttpClientModule
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
