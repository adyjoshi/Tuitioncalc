//function selectPartTime(newvalue){
   // alert("Part Time = " + newvalue);
//}

//function selectCourses(newvalue){
  //  alert("Courses  = " + newvalue);
//}

//Only use lets if they are going to be global, everything else can be var

//Set these up here so easier to update if they ever change.
let newfoundland=255.00;
let canada=333.00;
let international=1146.00;
let distNF=51.00;
let distint=102.00;
let servicesfee = 50.00;

function _calculator()
{
    //Two functions with same name won't work in javascript
}


//other code calculations
function calculator(){
   //Changed how this piece works.  Instead of trying to do this on two variables, use jquery to just get one and calculate from there
   var studentType = $("#studentType").val();
   var courseNum = $("#courseNum").val();
   var currentResident = $("#currentresident").val();
   
   //We need to do some error checking before any calculation can be done.  Once they select the type of student they are (full or part) other fields will need to be completed.
   //Calling return will kill the function
   if(courseNum == '') {
        return;
   }
   
   var winter =  Number($("#winter").val());
   var spring =  Number($("#spring").val());
   var fall =  Number($("#fall").val());
   

   if(winter == '' && spring == '' && fall == '') {
       return;
   }
   
   //Other variables are pre populated so we won't need to kill the calculation.
   
   //Now we are ready to start calculating
   if (studentType=="partTime"){
        //course based fees calculator;
        var courseTuition=0;
        var distFee=0;
        
        //var numcourses= document.getElementsByName('coursenum')[0].text; - Akready know this
        if (currentResident=="newfoundland"){
            courseTuition=courseNum*newfoundland;
        }
        else if (currentResident=="canada"){
            courseTuition=courseNum*canada;
        }
        else if (currentResident=="outside") {
            courseTuition=courseNum*international;
        }
        
        //Example of updating a html block using jQuery.  return is going to end the function and do nothing.  You need to do something like this to update the html on the page
        $("#tuitionTotal").html('$' + courseTuition + '.00');
        
        //distance fee
        if (currentResident=="newfoundland"){
            distFee=courseNum*distNF;
        } else {
            distFee=courseNum*distint;
        }
        
        $("#distanceEdTotal").html('$' + distFee + '.00');
        
        //campus Renewal fee
        var campusRenewal = courseNum*50.00;
        $("#campusRenewalTotal").html('$' + campusRenewal + '.00');
        
        var courseSub = courseTuition+distFee+campusRenewal; 
        $("#courseSubtotal").html('$' + courseSub + '.00');
        
        //Hopefully you can take it from here, use the above code as an example.
        

        
        //student service fees *50.00
        var stuServiceFee = (winter+spring+fall) *servicesfee;
        $("#stuServicesFee").html('$' + stuServiceFee + '.00');
        
        
        //student union
        var stuUnion =0;
        if (partTime=="yes"){
            stuUnion=(winter+spring+fall)*20.23;
            
            return stuUnion;
        }
        else {
            stuUnion=(winter+spring+fall)*47.22;
            return stuUnion;
        }
        $("#stuUnion").html('$' + stuUnion + '.00');
        return;
        //cfosProv and fed fee
        var cfosProv=(winter*4.57)+(fall*4.57);
        return cfosProv;
        var cfosFed = (winter*4.57)+(fall*4.57);
        return cfosFed;
        var mediafee=(winter+spring+fall)*4.00;
        return mediafee;


        //subtotal semester based fees
        var semSubTotal = stuServiceFee+stuUnion+cfosProv+cfosFed+mediafee;
        return semSubTotal;

        //optional Fees
        //student health plan newfoundland
        var stuHealthPlan = 0;
        if (healthplan=="yes"){
            stuHealthplan= (winter+spring+fall)*89.00;
            return stuHealthPlan;
        }
        else {
            //stuHealthPlan=0;
            return stuHealthPlan;
        }
        //student dental plan newfoundland
        var stuDentalPlan = 0;
        if (dentalplan=="yes"){
            stuDentalplan= (winter+spring+fall)*71.50;
            return stuDentalPlan;
        }
        else {
            //stuDentalplan=0;
            return stuDentalPlan;

        }
        //student Recreation fee
        var recreationFee = document.getElementsByName("recreationfee")[0].text;
        if (recreationfee=="yes"){
            recreationFee= (winter+spring+fall)*61.14;
            return recreationFee;
        }
        else {
            //recreationFee=0;
            return recreationFee;
        }
        //subtotal optional fees
        var optionalSubtotal = stuHealthPlan+stuDentalPlan+recreationFee;
        return optionalSubtotal;




        //Overall subtotals
      
        var total = coursesubtotal+semSubTotal+optionalSubtotal;
        return total;

  

    }

    }
