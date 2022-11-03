import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'new',
    loadChildren: () => import('./pages/new-product/new-product.module').then(m=>m.NewProductModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/update-product/update-product.module').then(m=>m.UpdateProductModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
