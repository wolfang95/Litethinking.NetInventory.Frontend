import { Injectable } from "@angular/core";
import { ProductForm } from "@app/pages/company/store/form";
import {ProductResponse} from '@app/pages/company/store/save';

@Injectable()
export class MapperService{
  constructor(){}

  productToForm(product: ProductResponse) : ProductForm {

    const productForm : ProductForm = {
      nombre: product.nombre,
      descripcion: product.descripcion,
      photoURL : product.imagen,
      categoria: product.categoriaId,
      marca: product.marcaId,
      precio: product.precio,
      stock: product.stock
    }

    return productForm;
  }

}
