import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  
  {
    path: 'partjugados',
    loadChildren: () => import('./pages/partjugados/partjugados.module').then( m => m.PartjugadosPageModule)
  },
  {
    path: 'proxpartidos',
    loadChildren: () => import('./pages/proxpartidos/proxpartidos.module').then( m => m.ProxpartidosPageModule)
  },
  {
    path: 'torneos',
    loadChildren: () => import('./pages/torneos/torneos.module').then( m => m.TorneosPageModule)
  },
  {
    path: 'sanjoaquin',
    loadChildren: () => import('./pages/sanjoaquin/sanjoaquin.module').then( m => m.SanjoaquinPageModule)
  },
  {
    path: 'toledo',
    loadChildren: () => import('./pages/toledo/toledo.module').then( m => m.ToledoPageModule)
  },
  {
    path: 'burocrata',
    loadChildren: () => import('./pages/burocrata/burocrata.module').then( m => m.BurocrataPageModule)
  },
  {
    path: 'infoplaya',
    loadChildren: () => import('./pages/infoplaya/infoplaya.module').then( m => m.InfoplayaPageModule)
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./pages/jugadores/jugadores.module').then( m => m.JugadoresPageModule)
  },
  {
    path: 'equipos',
    loadChildren: () => import('./pages/equipos/equipos.module').then( m => m.EquiposPageModule)
  },  {
    path: 'jugadores-l',
    loadChildren: () => import('./pages/jugadores-l/jugadores-l.module').then( m => m.JugadoresLPageModule)
  },
  {
    path: 'jugadores-m',
    loadChildren: () => import('./pages/jugadores-m/jugadores-m.module').then( m => m.JugadoresMPageModule)
  },
  {
    path: 'jugadores-n',
    loadChildren: () => import('./pages/jugadores-n/jugadores-n.module').then( m => m.JugadoresNPageModule)
  },



 
  /*
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
