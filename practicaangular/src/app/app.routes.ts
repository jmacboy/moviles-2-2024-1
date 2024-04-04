import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostdetailComponent } from './pages/postdetail/postdetail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: PostdetailComponent },
    { path: '**', redirectTo: '/home' }
];
