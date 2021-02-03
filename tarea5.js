


function Session() {




    var l_nombre= document.getElementById('nombre').value ;
    var l_edad=parseInt(document.getElementById('edad').value);





    sessionStorage.setItem(l_nombre, l_edad);
    localStorage.setItem(l_nombre, l_edad);

}