const tareas = [];
let btnAgregar = document.getElementById("btnAgregar");
const agregarTarea = () =>{
    let tarea = document.getElementById("tarea");
    let contenido = document.getElementById("contenido")

    if (tarea.value == ""){
        tarea.classList.add("animate__animated");
        tarea.classList.add("animate__jello");
        return false
    }else{
        tarea.classList.add("animate__animated");
        tarea.classList.add("animate__flash");
    }

    const NuevaTarea = {titulo:tarea.value, completada:false};
    tareas.push(NuevaTarea)

    let contenidoSalida = `<table class="table">`;
    
    
    


}

btnAgregar.addEventListener("click",agregarTarea)