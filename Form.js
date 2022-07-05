var dbName= "Tonni";
var dbPass="1234";
var p1="student";
var p2="sir";
var p3="madam";

document.querySelector("#submit").addEventListener("click", function() {

  var uInputName= document.querySelector("#name").value;
  var uInputPass= document.querySelector("#pass").value;
  var person= document.querySelector("#person").value.toLowerCase();

  if (uInputName==="" || uInputPass==="" || person==="") {

    document.querySelector(".Registration").innerHTML= "<h2>All filds must be filled in </h2>";

  }  else if ( (uInputName!==dbName && uInputPass===dbPass) && (person===p1 || person===p2 || person===p3) ) {

        document.querySelector(".Registration").innerHTML= "<h2>Invalid Username </h2>";

    }else if ((uInputName===dbName && uInputPass!==dbPass) && (person===p1 || person===p2 || person===p3) ) {

      document.querySelector(".Registration").innerHTML= "<h2>Invalid Password </h2>";

    }else if ((uInputName!==dbName && uInputPass!==dbPass) && (person===p1 || person===p2 || person===p3) ) {

      document.querySelector(".Registration").innerHTML= "<h2>Invalid Username & Password </h2>";

    }else if ((uInputName!==dbName && uInputPass===dbPass) && (person!==p1 || person!==p2 || person!==p3) ) {

      document.querySelector(".Registration").innerHTML= "<h2>Wrong username & person </h2>";

    }else if ((uInputName===dbName && uInputPass!==dbPass) && (person!==p1 || person!==p2 || person!==p3) ) {

      document.querySelector(".Registration").innerHTML= "<h2>Wrong password & person </h2>";

    } else if ((uInputName===dbName && uInputPass===dbPass) && (person===p1 || person===p2 || person===p3)){

     document.querySelector("#loginpage").style.display="none";

      if (person===p1) {

      document.querySelector("#welcomepage").innerHTML= "<h1>Log in successful.</h1><h1>Welcome Bro!</h1>";

      }else if (person===p2) {

      document.querySelector("#welcomepage").innerHTML= "<h1>Log in successful.</h1><h1>Welcome Sir</h1>";

      }else if (person===p3) {

      document.querySelector("#welcomepage").innerHTML= "<h1>Log in successful.</h1><h1>Welcome Madam</h1>";

    }

  }else if ((uInputName===dbName && uInputPass===dbPass)&&(person!==p1 || person!==p2 || person!==p3)) {

    document.querySelector(".Registration").innerHTML= "<h2>Wrong person </h2>";

  }else {

    document.querySelector(".Registration").innerHTML= "<h1>Log in failed</h1>";

  }

});
