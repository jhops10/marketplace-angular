import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { VendedorHomeComponent } from './pages/vendedor-home/vendedor-home.component';
import { AuthGuard } from './auth.guard';
import { AdicionarProdutosComponent } from './pages/adicionar-produtos/adicionar-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vendedor',
    component: VendedorComponent,
  },
  {
    path: 'vendedor-home',
    component: VendedorHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adicionar-produtos',
    component: AdicionarProdutosComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
