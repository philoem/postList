import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostFormComponent } from './posts-list/post-form/post-form.component';
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SinglePostComponent } from './posts-list/single-post/single-post.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'post', canActivate: [AuthGuardService], component: PostsListComponent },
  { path: 'post/new', canActivate: [AuthGuardService], component: PostFormComponent },
  { path: 'post/view/:id', canActivate: [AuthGuardService],component: SinglePostComponent },
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: '**', redirectTo: 'post' }

];

@NgModule({
  declarations: [
    AppComponent,
    //PostComponent,
    HeaderComponent,
    PostsListComponent,
    PostFormComponent,
    SignupComponent,
    SigninComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    AuthService,
    PostService,
    AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
