import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { VendedorHomeComponent } from './pages/vendedor-home/vendedor-home.component';
import { AuthGuard } from './auth.guard';
import { AdicionarProdutosComponent } from './pages/adicionar-produtos/adicionar-produtos.component';
import { VendedorUpdateProdutoComponent } from './pages/vendedor-update-produto/vendedor-update-produto.component';
import { SearchComponent } from './components/search/search.component';
import { DetalhesProdutoComponent } from './pages/detalhes-produto/detalhes-produto.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

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
  {
    path: 'update-produtos/:id',
    component: VendedorUpdateProdutoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search/:query',
    component: SearchComponent,
  },
  {
    path: 'details/:productId',
    component: DetalhesProdutoComponent,
  },
  {
    path: 'user-auth',
    component: UserAuthComponent,
  },
  {
    path: 'cart-page',
    component: CartPageComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
