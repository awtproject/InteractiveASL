import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

import { AlphabetsComponent } from './components/alphabets/alphabets.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { WordsComponent } from './components/words/words.component';

import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'reset', component: ResetComponent},
  {path:'AboutUs', component: AboutUsComponent},
  {path:'ContactUs', component: ContactUsComponent},
  {path:'practice', component: PracticeComponent},
  {path:'test', component: TestComponent},
  {path:'learn', component: LearnComponent},
  {path:'learn/alphabets', component: AlphabetsComponent},
  {path:'learn/numbers', component: NumbersComponent},
  {path:'learn/words', component: WordsComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userprofile', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
