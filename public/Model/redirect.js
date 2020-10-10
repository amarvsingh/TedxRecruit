function validateAndRedirect(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var local = document.getElementById("local").value;
    var code = document.getElementById("code").value;
    var contact = local.concat(code);
    var college = document.getElementById("college").value;
    var role = document.getElementById("role").value;
    if (fullname != null && email != null && local != null && code != null && college != null && role != null){
        var url;
        if (role == "Role 1"){
            url = "Role1.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&role="+role;
        }
        else if (role == "Role 2"){
            url = "role2.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&role="+role;
        }
        else if (role == "Role 3"){
            url = "role3.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&role="+role;
        }
        else if (role == "Role 4"){
            url = "role4.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&role="+role;
        }
        else if (role == "Role 5"){
            url = "role5.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&role="+role;
        }
        window.location.replace(url);
    }
    else{
        alert("Please fill all the fields");
    }
}