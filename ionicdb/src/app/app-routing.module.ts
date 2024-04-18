import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'persona/create',
    loadChildren: () => import('./pages/personaform/personaform.module').then( m => m.PersonaformPageModule)
  },
  {
    path: 'persona/:id',
    loadChildren: () => import('./pages/personaform/personaform.module').then( m => m.PersonaformPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
