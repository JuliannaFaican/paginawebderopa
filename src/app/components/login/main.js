function login(){
    var user, password 

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if(user == "Yongbok" && password == "abcdefgi143"){
        window.location = "home.component.html";
    }else{
        
    }
}