$(document).ready(function(){
    $(window).scrollTop(0);
})


$("#beginButton").click(function(){
   $(window).scrollTo("#q1",0.5)
 })


$(".nextButton").click(function(){ //when you click on button with class nextButton
  nq = $(this).attr("data-next"); //grabbing custom attr data-next and loading it into variable nq
  $(document).scrollTo(nq,0.5) //scroll to that variable
})

var answers = [0,0,0,0,0] //make array that sets all answer values at 0


$("label").click(function(){ //when click on label element
  var blockNum = "."+$(this).closest(".questionBlock").attr("data-question"); //select the label, select closest parent with class qustionBlock, grab the value of custom attribute data-question

  var oldVal = $(blockNum+" label.active").attr("data-value"); //

    $(blockNum+" label.active").removeClass("active"); //first remove the custom class active to any label that has it

    $(this).addClass("active") //then you add it to this specific label
    var newVal = $(blockNum+" label.active").attr("data-value");


    if (newVal == "A") {
      answers[0] = answers[0]+1;
    } else if (newVal == "B") {
      answers[1] = answers[1]+1;
    } else if (newVal == "C") {
      answers[2] = answers[2]+1;
    } else if (newVal == "D") {
      answers[3] = answers[3]+1;
    } else if (newVal == "E") {
      answers[4] = answers[4]+1;
    }


    if (oldVal == "A") {
      answers[0] = answers[0]-1;
    } else if (oldVal == "B") {
      answers[1] = answers[1]-1;
    } else if (oldVal == "C") {
      answers[2] = answers[2]-1;
    } else if (oldVal == "D") {
      answers[3] = answers[3]-1;
    } else if (oldVal == "E") {
      answers[4] = answers[4]-1;
    }

})

$(".submitButton").click(function(){

   var topResult = Math.max(...answers);

   if (topResult == answers[0]) {
     $(window).scrollTo("#mostlyBigDisagree",0.5);
   } else if (topResult == answers[1]) {
     $(window).scrollTo("#mostlyDisagree",0.5);
   } else if (topResult == answers[2]) {
     $(window).scrollTo("#mostlyNeutral",0.5);
   } else if (topResult == answers[3]) {
     $(window).scrollTo("#mostlyAgree",0.5);
   } else if (topResult == answers[4]) {
     $(window).scrollTo("#mostlyBigAgree",0.5);
   }

});
