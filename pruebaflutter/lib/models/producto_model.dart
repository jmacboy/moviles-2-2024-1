import 'dart:convert';

Producto productoFromJson(String str) => Producto.fromJson(json.decode(str));

String productoToJson(Producto data) => json.encode(data.toJson());

class Producto {
    String nombre;
    int cantidad;
    int precio;

    Producto({
        required this.nombre,
        required this.cantidad,
        required this.precio,
    });

    factory Producto.fromJson(Map<String, dynamic> json) => Producto(
        nombre: json["nombre"],
        cantidad: json["cantidad"],
        precio: json["precio"],
    );

    Map<String, dynamic> toJson() => {
        "nombre": nombre,
        "cantidad": cantidad,
        "precio": precio,
    };
}
