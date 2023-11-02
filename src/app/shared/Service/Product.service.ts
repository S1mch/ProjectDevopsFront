import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL = environment.API_Base;

  constructor(private httpClient: HttpClient) { }
  getAllProducts() {
    return this.httpClient.get(`${this.API_URL}/produit/retrieve-all-produits`)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${this.API_URL}/produit/add-produit`, product)
  }
  

}
