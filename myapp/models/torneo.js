var Torneo = function(id, nombre, lugar, categoria){
    this.id = id;
    this.nombre = nombre;
    this.lugar = lugar;
    this.categoria = categoria;
}

Torneo.prototype.toString = function (){
    return 'id' + this.id + " | Nombre: " + this.nombre;


}

Torneo.allTorneos = [];
Torneo.add = function(aTorneo){
    Torneo.allTorneos.push(aTorneo)
}

Torneo.findById = function(aTorneoId){
    var aTorneo = Torneo.allTorneos.find(x => x.id == aTorneoId);
    if(aTorneo)
        return aTorneo;
    else
        throw new Error('No existe ese torneo'  )
}

Torneo.removeById = function(aTorneoId){
    for (var i = 0; i < Torneo.allTorneos.length; i++){
        if(Torneo.allTorneos[i].id == aTorneoId){
            Torneo.allTorneos.splice(i, 1);
            break;
        }
    }
}


var a = new Torneo(1,'primero torneo del año', 'Capital federal', 1)
var b = new Torneo(2,'segundo torneo del año', 'Capital federal', 1)

Torneo.add(a)
Torneo.add(b)

module.exports = Torneo;
