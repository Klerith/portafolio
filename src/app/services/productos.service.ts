import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor( private http:Http ) {

    this.cargar_productos();

  }

  public cargar_productos(){

    this.cargando = true;

      this.http.get('https://paginaweb-23ef1.firebaseio.com/productos_idx.json')
            .subscribe( res => {

              console.log( res.json() );
              this.cargando = false;
            });


  }

}
