import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titulo = "Listado de productos de la tienda High Times";
  productos = [
    {
      href:"https://www.flaticon.es/icono-gratis/pano_2503385?term=camisa&related_id=2503385",
      image:"pano",
      nombre: "Camisas",
      valor: 30000,
      contenido: "prenda disponible",
    },
    {
      href:"https://www.flaticon.es/icono-gratis/pantalones_776623?term=pantalon&related_id=776623",
      image:"pantalones",
      nombre: "Pantalon",
      valor: 70000,
      contenido: "prenda disponible",
    }, 
    {
      href:"https://www.flaticon.es/icono-gratis/calcetines_2161283?term=calcetines&page=1&position=11&page=1&position=11&related_id=2161283&origin=search",
      image:"calcetines",
      nombre: "Medias",
      valor: 10000,
      contenido: "prenda disponible",
    },
    {
      href:"https://www.flaticon.es/icono-gratis/zapatillas_2912358?term=zapatos&related_id=2912358",
      image:"zapatillas",
      nombre: "Zapatos",
      valor: 100000,
      contenido: "prenda disponible",
    },

    {
      href:"https://www.flaticon.es/icono-gratis/gafas-de-sol_941329?term=gafas&page=1&position=13&page=1&position=13&related_id=941329&origin=search",
      image:"gafas-de-sol",
      nombre: "Gafas",
      valor: 30000,
      contenido: "prenda disponible",
    },

    {
      href:"https://www.flaticon.es/icono-gratis/sudadera-con-capucha_1785275?term=sudadera&page=1&position=6&page=1&position=6&related_id=1785275&origin=search",
      image:"sudadera-con-capucha",
      nombre: "Hoodie",
      valor: 100000,
      contenido: "prenda disponible",
    },

    {
      href:"https://www.flaticon.es/icono-gratis/gorra_1974214?term=gorra&page=1&position=7&page=1&position=7&related_id=1974214&origin=search",
      image:"gorra",
      nombre: "Gorra",
      valor: 20000,
      contenido: "prenda disponible",
    },

    {
      href:"https://www.flaticon.es/icono-gratis/tacon-alto_394401?term=tacones&related_id=394401",
      image:"tacon-alto",
      nombre: "Tacos",
      valor: 100000,
      contenido: "prenda disponible",
    },

  ];

}
