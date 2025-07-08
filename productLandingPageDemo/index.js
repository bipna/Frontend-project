function passwordcheck() {
    const password = document.getElementById("password");
    const icon= document.querySelector(".passwordcheck");
    const isPassword = password.type === "password";

    password.type = password.type ==="password"? "text" : "password";
    icon.classList.toggle("fa-eye-slash", isPassword);
    icon.classList.toggle("fa-eye", !isPassword);


}
function submitForm(){
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    const hasuppercase=/[A-Z]/.test(password);
    const hasnumber=/[0-9]/.test(password);
    const hasSymbol = /[^a-zA-Z0-9]/.test(password);

    if (!username || !email || !password){
        showmessage("Please fill all field","red");
        return;
    }
    if(!email.includes("@")|| !email.includes(".")){
        showmessage("Please enter valid Email","red");

        return;

    }
    if(password.length < 8){
        showmessage("Password must include more than 8 letters ","red");

        return;
    }
    if(!hasnumber|| !hasSymbol || !hasuppercase){
        showmessage("Password must be in given format ","red");

        return;
    }
    showmessage("Account has created sucessfully","green");

    setTimeout(()=>{
        window.location.href="index.html";
    }, 2000);
}
function showmessage(msg,color){
     const message = document.getElementById("message");
     message.textContent=msg;
     message.style.color=color;

}
