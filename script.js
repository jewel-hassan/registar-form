function saveToFile() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var demoContent = document.getElementById("demo")

    var userData = {
        username: username,
        email: email,
        password: password,
    }

    var jsonData = JSON.stringify(userData);
    var blob = new Blob([jsonData], { type: "application/json" });

    var file = new File([blob], "user_data.json", { type: "application/json" });

    var reader = new FileReader();
    reader.onload = function (event) {
        // event.target.result contains the text from the file
        demoContent.innerText=event.target.result;
    };

    // Read the file content
    reader.readAsText(file);
}

;[]