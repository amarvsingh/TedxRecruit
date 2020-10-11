function validateAndRedirect(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var local = document.getElementById("local").value;
    var code = document.getElementById("code").value;
    var contact = local.concat(code);
    var college = document.getElementById("college").value;
    var year =  document.getElementById("year").value;
    var role = document.getElementById("role").value;
    if (fullname != null && email != null && code != null && college != null && role != null && year!=null){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())){
            if (code.length == 10){
                var url;
                if (role == "Technology Specialist"){
                    url = "Role1.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&year="+year+"&role="+role;
                }
                else if (role == "Web Designer"){
                    url = "role2.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&year="+year+"&role="+role;
                }
                else if (role == "Graphic Designer"){
                    url = "role3.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&year="+year+"&role="+role;
                }
                else if (role == "Social Media Marketing Managers"){
                    url = "role4.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&year="+year+"&role="+role;
                }
                else if (role == "Sponsorship & Experience"){
                    url = "role5.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&year="+year+"&role="+role;
                }
                else if (role == "Video Production"){
                    url = "role6.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&year="+year+"&role="+role;
                }
                else if (role == "Event producers and managers"){
                    url = "role7.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&year="+year+"&role="+role;
                }
                else if (role == "Communication Managers"){
                    url = "role8.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&year="+year+"&role="+role;
                }
                else if (role == "Editorial Laison"){
                    url = "role9.html?fullname="+fullname+"&email="+email+"&phone="+contact+"&college="+college+"&year="+year+"&role="+role;
                }
                window.location.replace(url);
            }
            else{
                alert("Enter a valid contact information");
            }
        }
        else{
            alert("Enter a valid email address");
        }
    }
    else{
        alert("Please fill all the fields");
    }
}