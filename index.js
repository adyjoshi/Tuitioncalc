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
let stuUnionPart = 20.23;
let stuUnionFull = 47.22;
let cfosProv = 4.57;
let cfosFed =4.57;
let mediafee = 4.00;
let studentHealth = 89.00;
let studentDental = 71.50;
let studentrecreation = 61.14;

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
        else if (currentResident=="Outside") {
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
        $("#courseSubtotal2").html('$' + courseSub + '.00');
        //Hopefully you can take it from here, use the above code as an example.
        

        
        //student service fees *50.00
        var stuServiceFee= $("#stuServicesFee").val();
        var stuServiceFee = (winter+spring+fall) *servicesfee;
        $("#stuServicesFee").html('$' + stuServiceFee + '.00');
        
        
        //student union
        var stuUnion = $("#stuUnion").val();
        var stuUnion =0;
        if (studentType=="partTime"){
            stuUnion=(winter+spring+fall)*stuUnionPart;
        }
        //else {
           // stuUnion=(winter+spring+fall)*stuUnionFull;
        //}
        $("#stuUnion").html('$' + stuUnion );
    
        //cfosProv and fed fee
        var cfosProv= $("#cadProv").val();
        var cfosProv=(winter*4.57)+(fall*4.57);
        $("#cadProv").html('$' + cfosProv );
        var cfosFed= $("#cadFed").val();
        var cfosFed = (winter*4.57)+(fall*4.57);
        $("#cadFed").html('$' + cfosFed );
    

        var mediafee= $("#mediaFee").val();
        var mediafee=(winter+spring+fall)*4.00;
        $("#mediaFee").html('$' + mediafee + '.00');
    
    
        //subtotal semester based fees
        var semSubTotal = (stuServiceFee+stuUnion+cfosProv+cfosFed+mediafee);
        $("#semSubtotal").html('$' + semSubTotal.toFixed(2) );
        $("#semSubtotal2").html('$' + semSubTotal.toFixed(2) );
    

        //optional Fees
        //student health plan newfoundland
        var healthplan = $("#healthplan").val();
        var stuHealthPlan = 0;
        if (healthplan=="Yes"){
            stuHealthPlan= (winter+spring+fall)*studentHealth;
        }
        

        //else {
            //stuHealthPlan=0;
          //  stuHealthPlan=0;
        //}
        $("#stuHealth").html('$' + stuHealthPlan + '.00');
        //student dental plan newfoundland
        var dentalplan = $("#dentalplan").val();
        var stuDentalPlan = 0;
        if (dentalplan=="Yes"){
            stuDentalPlan= (winter+spring+fall)*studentDental;
        }
        
        $("#stuDental").html('$' + stuDentalPlan.toFixed(2));
    
        //student Recreation fee
        var studentrecreationfee =0;
        var recreationFee = $("#recreationfee").val();
        if (recreationFee=="Yes"){
            studentrecreationfee= (winter+spring+fall)*studentrecreation;
        }
        
        $("#Recreationfee").html('$' + studentrecreationfee.toFixed(2));

    
        //subtotal optional fees
        var optionalSubtotal = (stuHealthPlan+stuDentalPlan+studentrecreationfee);
        //return optionalSubtotal;
        $("#optionalSubtotal").html('$' + optionalSubtotal.toFixed(2));
        $("#optionalSubtotal2").html('$' + optionalSubtotal.toFixed(2));
       


        //Overall subtotals
      
        var total = (courseSub+semSubTotal+optionalSubtotal);
        //return total;
        $("#total").html('$' + total.toFixed(2));

    return;  

    }

//calculating if fulltime
    if (studentType=="fullTime"){
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
        else if (currentResident=="Outside") {
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
        $("#courseSubtotal2").html('$' + courseSub + '.00');
        //Hopefully you can take it from here, use the above code as an example.
        

        
        //student service fees *50.00
        var stuServiceFee = (winter+spring+fall) *servicesfee;
        $("#stuServicesFee").html('$' + stuServiceFee + '.00');
        
        
        //student union
        var stuUnion = $("#stuUnion").val();
        var stuUnion =0;
        if (studentType=="fullTime"){
            stuUnion=(winter+spring+fall)*stuUnionFull;
        }
        $("#stuUnion").html('$' + stuUnion );

        //cfosProv and fed fee
        
        var cfosProv= $("#cadProv").val();
        var cfosProv=(winter*4.57)+(fall*4.57);
        $("#cadProv").html('$' + cfosProv );
        var cfosFed= $("#cadFed").val();
        var cfosFed = (winter*4.57)+(fall*4.57);
        $("#cadFed").html('$' + cfosFed );
    

        var mediafee= $("#mediaFee").val();
        var mediafee=(winter+spring+fall)*4.00;
        $("#mediaFee").html('$' + mediafee + '.00');


        //subtotal semester based fees
        var semSubTotal = (stuServiceFee+stuUnion+cfosProv+cfosFed+mediafee);
        $("#semSubtotal").html('$' + semSubTotal.toFixed(2) );
        $("#semSubtotal2").html('$' + semSubTotal.toFixed(2) );


        //optional Fees
        //student health plan newfoundland
        var healthplan = $("#healthplan").val();
        var stuHealthPlan = 0;
        //if healthplan is for outside canada doesnt work!)
        //
        //
        //
        // REMEMBER TO CHANGE and FIX this
        //
        //
        //
        //
        //
        //

        if (healthplan=="Yes"){
            stuHealthPlan= (winter+spring+fall)*studentHealth;
        }
        

        //else {
            //stuHealthPlan=0;
        //  stuHealthPlan=0;
        //}
        $("#stuHealth").html('$' + stuHealthPlan + '.00');
        //student dental plan newfoundland
        var dentalplan = $("#dentalplan").val();
        var stuDentalPlan = 0;
        if (dentalplan=="Yes"){
            stuDentalPlan= (winter+spring+fall)*studentDental;
        }
        
        $("#stuDental").html('$' + stuDentalPlan.toFixed(2));

        //student Recreation fee
        var studentrecreationfee =0;
        var recreationFee = $("#recreationfee").val();
        if (recreationFee=="Yes"){
            studentrecreationfee= (winter+spring+fall)*studentrecreation;
        }
        
        $("#Recreationfee").html('$' + studentrecreationfee.toFixed(2));


        //subtotal optional fees
        var optionalSubtotal = (stuHealthPlan+stuDentalPlan+studentrecreationfee);
        //return optionalSubtotal;
        $("#optionalSubtotal").html('$' + optionalSubtotal.toFixed(2));
        $("#optionalSubtotal2").html('$' + optionalSubtotal.toFixed(2));
    


        //Overall subtotals
    
        var total = (courseSub+semSubTotal+optionalSubtotal);
        //return total;
        $("#total").html('$' + total.toFixed(2));

    return;  

    }


    }
