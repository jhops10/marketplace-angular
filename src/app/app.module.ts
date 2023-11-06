import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VendedorHomeComponent } from './pages/vendedor-home/vendedor-home.component';
import { AdicionarProdutosComponent } from './pages/adicionar-produtos/adicionar-produtos.component';
import { VendedorUpdateProdutoComponent } from './pages/vendedor-update-produto/vendedor-update-produto.component';
import { SearchComponent } from './components/search/search.component';
import { DetalhesProdutoComponent } from './pages/detalhes-produto/detalhes-produto.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VendedorComponent,
    VendedorHomeComponent,
    AdicionarProdutosComponent,
    VendedorUpdateProdutoComponent,
    SearchComponent,
    DetalhesProdutoComponent,
    UserAuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
