import 'dart:convert';

List<PersonaJson> personaListJsonFromJson(String str) => List<PersonaJson>.from(
    json.decode(str).map((x) => PersonaJson.fromJson(x)));

String personaListJsonToJson(List<PersonaJson> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

PersonaJson personaJsonFromJson(String str) =>
    PersonaJson.fromJson(json.decode(str));

String personaJsonToJson(PersonaJson data) => json.encode(data.toJson());

class PersonaJson {
  int? id;
  String nombres;
  String apellidos;
  int edad;
  String ciudad;
  DateTime fechaNacimiento;
  DateTime? createdAt;
  DateTime? updatedAt;

  PersonaJson({
    this.id,
    required this.nombres,
    required this.apellidos,
    required this.edad,
    required this.ciudad,
    required this.fechaNacimiento,
    this.createdAt,
    this.updatedAt,
  });

  factory PersonaJson.fromJson(Map<String, dynamic> json) => PersonaJson(
        id: json["id"],
        nombres: json["nombres"],
        apellidos: json["apellidos"],
        edad: json["edad"],
        ciudad: json["ciudad"],
        fechaNacimiento: DateTime.parse(json["fechaNacimiento"]),
        createdAt: DateTime.parse(json["created_at"]),
        updatedAt: DateTime.parse(json["updated_at"]),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "nombres": nombres,
        "apellidos": apellidos,
        "edad": edad,
        "ciudad": ciudad,
        "fechaNacimiento":
            "${fechaNacimiento.year.toString().padLeft(4, '0')}-${fechaNacimiento.month.toString().padLeft(2, '0')}-${fechaNacimiento.day.toString().padLeft(2, '0')}",
        "created_at": createdAt?.toIso8601String(),
        "updated_at": updatedAt?.toIso8601String(),
      };
}
