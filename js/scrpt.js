
var el = document.getElementById("dateField");
el.onkeyup = function(evt) {
      if((evt.keyCode >= 48 && evt.keyCode <= 57) || (evt.keyCode >= 96 &&
  evt.keyCode <= 105)) {
         evt = evt || window.event;
           var size = document.getElementById('dateField').value.length;

           if ((size == 2 && document.getElementById('dateField').value > 31)|| (size == 5 && Number(document.getElementById('dateField').value.split('/')[1]) > 12) || (size == 10 && Number(document.getElementById('dateField').value.split('/')[2]) > 2017)) {
               alert('Invalid Date');
               document.getElementById('dateField').value = '';
               return;
           }

          if ((size == 2 && document.getElementById('dateField').value < 32)|| (size == 5 && Number(document.getElementById('dateField').value.split('/')[1]) < 13)) {
              document.getElementById('dateField').value += '/';
         }

        }
    }
//Arrays for male and female Akan Names
//let fNames=["Akusoa","Adwa","Abenaa","Akwa","Yaa","Afua","Ama"];
//let mNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

//var gender=("male","female");
var dOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//var month;
//if (dOfWeek<0||dOfWeek>32)&& (month<0||month>13){
  //alert("Enter valid Date and Month");
//}else{
  //return(dOfWeek);
//}

//function gender(male,female){
  //if(gender==male){
    //document.getElementById('gender')="Your Akan Name Is:"+gender.mNames;
  //}else{
    //document.getElementById('gender')="Your Akan Name Is:"+gender.fNames;
  //}
//}
