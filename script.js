function register(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userData ={
        username:username,
        email:email,
        password:password,
    }

    var jsonData = JSON.stringify(userData);
    var blob = new Blob([jsonData],{type:"application/json"});

    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "user_data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

}