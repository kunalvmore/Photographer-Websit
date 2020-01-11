function myFunonload(){
  var x = document.getElementById("servicescontainerone");
  var y = document.getElementById("servicescontainertwo");
  var z = document.getElementById("servicescontainerthree");
  var f = document.getElementById("servicescontainerfour");

  if(x.style.display === "block" || y.style.display === "block" ||z.style.display === "block"){
    y.style.display = "none";
    x.style.display = "none";
    z.style.display = "none";
    f.style.display = "none";

  }else{
    y.style.display = "none";
    x.style.display = "block";
    z.style.display = "none";
    f.style.display = "none";
  }
}



function myFunction(){
  var x = document.getElementById("servicescontainerone");
  var y = document.getElementById("servicescontainertwo");
  var z = document.getElementById("servicescontainerthree");
  var f = document.getElementById("servicescontainerfour");


  if(x.style.display === "none" || x.style.display === "block"){
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    f.style.display = "none";

  }else{
    y.style.display = "none";
    x.style.display = "none";
    z.style.display = "none";
    f.style.display = "none";  }

}
function myFunctiontwo(){
  var x = document.getElementById("servicescontainerone");
  var y = document.getElementById("servicescontainertwo");
  var z = document.getElementById("servicescontainerthree");
  var f = document.getElementById("servicescontainerfour");
  if(y.style.display === "none" || y.style.display === "block"){
    y.style.display = "block";
    document.getElementById("servicescontainerone").style.display = "none";
    z.style.display = "none";
    f.style.display = "none";

  }else{
    y.style.display = "none";
    x.style.display = "none";
    z.style.display = "none";
    f.style.display = "none";   }
}
function myFunctionthree(){
  var x = document.getElementById("servicescontainerone");
  var y = document.getElementById("servicescontainertwo");
  var z = document.getElementById("servicescontainerthree");
  var f = document.getElementById("servicescontainerfour");



  if(z.style.display === "none" || z.style.display === "block"){

    z.style.display = "block";
    f.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";

  }else{
    y.style.display = "none";
    x.style.display = "none";
    z.style.display = "none";
    f.style.display = "none";   }

}
function myFunctionfour(){
  var x = document.getElementById("servicescontainerone");
  var y = document.getElementById("servicescontainertwo");
  var z = document.getElementById("servicescontainerthree");
  var f = document.getElementById("servicescontainerfour");

  if(f.style.display === "none" || f.style.display === "block"){
    f.style.display = "block";
    z.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
  }else{
    y.style.display = "none";
    x.style.display = "none";
    z.style.display = "none";
    f.style.display = "none";   }

}
function myFunctionall(){
  var x = document.getElementById("servicescontainerone");
  var y = document.getElementById("servicescontainertwo");
  var z = document.getElementById("servicescontainerthree");
  var f = document.getElementById("servicescontainerfour");

  if(x.style.display === "block" || y.style.display === "block" ||z.style.display === "block" ||f.style.display === "block"){
    f.style.display = "block";
    z.style.display = "block";
    x.style.display = "block";
    y.style.display = "block";
  }else{
    y.style.display = "none";
    x.style.display = "none";
    z.style.display = "none";
    f.style.display = "none";   }

}
/*
function myFunction(){
  document.getElementById("servicescontainerone")="none";
  document.getElementById("servicescontainertwo")="block";
  document.getElementById("servicescontainerthree")="block";
}
function myFunctiontwo(){
  document.getElementById("servicescontainerone")="block";
  document.getElementById("servicescontainertwo")="none";
  document.getElementById("servicescontainerthree")="block";
}
*/
