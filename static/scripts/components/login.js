// Create Login Form
var el_login = document.createElement("form");
el_login.id = "login-form";
el_login.classList = "login";
el_login.action = "/login";
el_login.method = "post";

// Create form Title
var el_title = document.createElement("h1");
el_title.innerText = "flow";

// Create Username Field
var el_username = document.createElement("input");
el_username.type = "text";
el_username.name = "un";
el_username.placeholder = "username";

// Create Password Field
var el_password = document.createElement("input");
el_password.type = "password";
el_password.name = "pw";
el_password.placeholder = "password";

// Create Submit Button
var el_submit = document.createElement("button");
el_submit.type = "submit";
//el_submit.innerText = "Login";

// Assemble Login Form
el_login.append(el_title);
el_login.append(el_username);
el_login.append(el_password);
el_login.append(el_submit);

// Apply Styles
var el_style = document.createElement("link");
el_style.rel = "stylesheet";
el_style.href = "../styles/components/login.css";
el_login.append(el_style);

// Render
document.getElementById("main-container").append(el_login);
