import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire/compat'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from 'src/environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'

@NgModule({
	declarations: [
		AppComponent,
		ReactiveFormsComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase) 
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
