var dayjs= dayjs();
var date= dayjs.format("DD/MM/YYYY h:mm:ss A");
var dateHour= dayjs.format('h');
var dateAMPM= dayjs.format("A");
$("#currentDay").text(date);
var dateHourNum = Number(dateHour)
var hourampm= dateHour+dateAMPM;

for(var i=1; i < 25; i++){
    if(i < 13){
      $(".dayz").append('<div id="hour-'+i+'" class="row time-block '+i+'AM"></div>');
      $("#hour-"+i).append(
        '<div class="col-2 col-md-1 hour text-center py-3">'+i+':00 AM</div><textarea class="col-8 col-md-10 description-'+i+'" rows="3"> </textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i> </button></div>'
        );
    }else{
      $(".dayz").append('<div id="hour-'+i+'" class="row time-block '+i+'PM"></div>');
      $("#hour-"+i).append(
        '<div class="col-2 col-md-1 hour text-center py-3">'+i+':00 PM</div><textarea class="col-8 col-md-10 description-'+i+'" rows="3"> </textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i> </button></div>'
        );
    }
}


if(dateAMPM == "PM"){
  for(var i =1; i < 13; i++){
    if( i == dateHourNum){
      var lab1= i + 12;
      var lab= lab1+'PM';
      $("."+lab).css("background", "#fc8f8d");

    }else if(i < dateHourNum){
      var lab1= i + 12;
      var lab= lab1+'PM';
      $("."+lab).css("background", "#bfbbbc");
    }else if(i >dateHourNum){
      var lab1= i + 12;
      var lab= lab1+'PM';
      $("."+lab).css("background", "#4adb37");
    }
    var lab= i+'AM';
    $("."+lab).css("background", "#bfbbbc");
  }

}else if(dateAMPM == "AM"){
  for(var i =1; i < 13; i++){
    if( i == dateHourNum){
      var lab= i+'AM';
      $("."+lab).css("background", "#fc8f8d");
      
    }else if(i < dateHourNum){
      var lab= i+'AM';
      $("."+lab).css("background", "#bfbbbc");
      
    }else if(i >dateHourNum){
      var lab= i+'AM';
      
      $("."+lab).css("background", "#4adb37");
    }
    
    var lab1= i + 12;
    var lab= lab1+'PM';
    $("."+lab).css("background", "#4adb37");
  }

}
var saveBtn= $(".saveBtn");

function getLocal(){

  for(var i= 0; i < 25; i ++){
  var test = localStorage.getItem('hour-'+i);
    $(".description-"+i).val(test);
  }
}
$(saveBtn.click(function (){
  var saveBtnId= $(this).parent("div").attr("id");
  var saveBtnclass= $(this).parent("div").attr("class");
  var saveBtnTextArea= $(this).parent("div").children("textarea").val();
  localStorage.setItem(saveBtnId , saveBtnTextArea); 

}));
getLocal();