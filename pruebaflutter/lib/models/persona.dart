class Persona{
  String nombre;
  String apellido;
  String telefono;
  
  Persona({required this.nombre, required this.apellido, required this.telefono});
  
  String getNombre(){
    return nombre;
  }
  
  void setNombre(String nombre){
    this.nombre = nombre;
  }
  
  String getApellido(){
    return apellido;
  }
  
  void setApellido(String apellido){
    this.apellido = apellido;
  }
  String getTelefono(){
    return telefono;
  }
  void setTelefono(String telefono){
    this.telefono = telefono;
  }

  @override
  String toString(){
    return "Nombre: $nombre $apellido, Teléfono: $telefono";
  }
}