import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LearnComponent } from './components/learn/learn.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PracticeComponent } from './components/practice/practice.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
import { TestComponent } from './components/test/test.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './services/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { AlphabetsComponent } from './components/alphabets/alphabets.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { WordsComponent } from './components/words/words.component';

import { HelperService } from './services/helper.service';
import { QuizService } from './services/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    LearnComponent,
    LoginComponent,
    NavBarComponent,
    PracticeComponent,
    ProfileComponent,
    RegisterComponent,
    ResetComponent,
    TestComponent,
    AlphabetsComponent,
    NumbersComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService,HelperService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
