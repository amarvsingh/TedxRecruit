function submitResponse(){
    var answer1 = document.getElementById("answer1").value;
    var answer2 = document.getElementById("answer2").value;
    var answer3 = document.getElementById("answer3").value;
    var answer4 = document.getElementById("answer4").value;
    var answer5 = document.getElementById("answer5").value;
    var answer6 = document.getElementById("answer6").value;
    var answer7 = document.getElementById("answer7").value;
    var answer8 = document.getElementById("answer8").value;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var fullname = urlParams.get("fullname");
    var email = urlParams.get("email");
    var phone = urlParams.get("phone");
    var college = urlParams.get("college");
    var role = urlParams.get("role");
    if (answer1 != null && answer2 != null && answer3 != null && answer4 != null && answer5 != null && answer6 != null && answer7 != null && answer8 != null){
        firebase.database().ref(role).child(fullname).set({
            name: fullname,
            email: email,
            phone: phone,
            college : college,
            position: role,
            Q1: answer1,
            Q2: answer2,
            Q3: answer3,
            Q4: answer4,
            Q5: answer5,
            Q6: answer6,
            Q7: answer7,
            Q8: answer8,
        },function(error){
            if (error){
                alert("Some error occured, please try again later");        
            }
            else{
                window.location.replace("success.html");
            }
        });
    }
    else{
        alert("Please fill all the fields");
    }
}