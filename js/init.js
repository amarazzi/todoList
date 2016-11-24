var constructorTareas = function(id, hacer){
  this.id = id;
  this.hacer = hacer;
  this.estado = "Pendiente";
}

function yaCargamos() {
  var tarea = document.getElementById('nuevaTarea');
  var boton = document.getElementById('agregarTarea');
  var bodyTabla = document.getElementById("listadoTareas");
  function recorrerLocalStorage(){
    bodyTabla.innerHTML = "";
    for (var i=0;i<localStorage.length;i++){
      var LocalStorageKeyDos = localStorage.key(i);
      var localStorageLocal = JSON.parse(localStorage.getItem(LocalStorageKeyDos));
      bodyTabla.innerHTML += "<tr><td>" + localStorageLocal.id + "</td><td>" + localStorageLocal.hacer + "</td><td>" + localStorageLocal.estado + "</td><td><input type='submit' class='botonEliminar' value='eliminar' id='" + localStorageLocal.id + "'></td></tr>";
      agregarListerner();
    }
  }recorrerLocalStorage();

  var botonEliminar2 = document.getElementsByClassName("botonEliminar");


  function eliminar(e){
      var borrarTarea = e.currentTarget.id;
      localStorage.removeItem(borrarTarea);
      recorrerLocalStorage();
  }

function agregarListerner(){
  for (var i=0;i<botonEliminar2.length;i++){
    botonEliminar2[i].addEventListener("click", eliminar);
  }
}

  boton.onclick = function(event){
    var localStorageKey = "Tarea" + Date.now();
    var info = tarea.value;
    var ingresarTarea = document.getElementById("noHayTarea");
    if (info===""){
      ingresarTarea.innerHTML = "No hay ninguna para agregar<br>";
    }else {
      tareaActual = new constructorTareas(localStorageKey, info);
      localStorage.setItem(localStorageKey, JSON.stringify(tareaActual));
      recorrerLocalStorage();

    }

  }
}
