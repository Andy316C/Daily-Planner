var dayjs= dayjs();
var date= dayjs.format("DD/MM/YYYY h:mm:ss A");
var dateHour= dayjs.format("h");
$("#currentDay").text(date);

for(var i=1; i < 25; i++){
  if(i < 12){
    $(".dayz").append('<div id="hour-'+i+'" class="row time-block past"></div>');
    $("#hour-"+i).append(
      '<div id="hour-'+i+'" class="row time-block past"></div><div class="col-2 col-md-1 hour text-center py-3">'+i+':00 AM</div><textarea class="col-8 col-md-10 description-'+i+'" rows="3"> </textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i> </button></div>'
      );
  }else{
    $(".dayz").append('<div id="hour-'+i+'" class="row time-block past"></div>');
    $("#hour-"+i).append(
      '<div class="col-2 col-md-1 hour text-center py-3">'+i+':00 PM</div><textarea class="col-8 col-md-10 description-'+i+'" rows="3"> </textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i> </button></div>'
      );
  }
}
var saveBtn= $(".saveBtn");

function getLocal(){

for(var i= 0; i < 25; i ++){
  var test = localStorage.getItem('hour-'+i);
  
  if(i == 1){
    $(".description-"+i).val(test);
  }
  else if(i == 2){
    $(".description-"+i).val(test);
  }
  else if(i == 3){
    $(".description-"+i).val(test);
  }
  else if(i == 4){
    $(".description-"+i).val(test);
  }
  else if(i == 5){
    $(".description-"+i).val(test);
  }
  else if(i == 6){
    $(".description-"+i).val(test);
  }
  else if(i == 7){
    $(".description-"+i).val(test);
  }
  else if(i == 8){
    $(".description-"+i).val(test);
  }
  else if(i == 9){
    $(".description-"+i).val(test);
  }
  else if(i == 10){
    $(".description-"+i).val(test);
  }
  else if(i == 11){
    $(".description-"+i).val(test);
  }
  else if(i == 12){
    $(".description-"+i).val(test);
  }
  else if(i == 13){
    $(".description-"+i).val(test);
  }
  else if(i == 14){
    $(".description-"+i).val(test);
  }
  else if(i == 15){
    $(".description-"+i).val(test);
  }
  else if(i == 16){
    $(".description-"+i).val(test); 
  }
  else if(i == 17){
    $(".description-"+i).val(test); 
  }
  else if(i == 18){
    $(".description-"+i).val(test); 
  }
  else if(i == 19){
    $(".description-"+i).val(test);
  }
  else if(i == 20){
    $(".description-"+i).val(test);  
  }
  else if(i == 21){
    $(".description-"+i).val(test);   
  }
  else if(i == 22){
    $(".description-"+i).val(test);   
  }
  else if(i == 23){
    $(".description-"+i).val(test); 
  }
  else if(i == 24){
    $(".description-"+i).val(test); 
  }
}

}
$(saveBtn.click(function (){
  var saveBtnId= $(this).parent("div").attr("id");
  var saveBtnclass= $(this).parent("div").attr("class");
  var saveBtnTextArea= $(this).parent("div").children("textarea").val();
  localStorage.setItem(saveBtnId , saveBtnTextArea); 
}));
getLocal()
  

