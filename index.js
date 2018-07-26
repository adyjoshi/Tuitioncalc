//function selectPartTime(newvalue){
   // alert("Part Time = " + newvalue);
//}

//function selectCourses(newvalue){
  //  alert("Courses  = " + newvalue);
//}
let fullTime = "No";
let partTime = "Yes";
let courseNum = 0;
let winter = 0;

function calculator()
{
    var pt = document.getElementById("partTime");
   partTime = pt.options[pt.selectedIndex].text;

   var ft = document.getElementById("partTime"); 
   fullTime = ft.options[ft.selectedIndex].text;

   courseNum =  document.getElementById("courseNum").value;
   winter =  document.getElementById("winter").value;
}


//other code calculations
function calculator(){
    if (partTime=="yes"){
//course based fees calculator;
        var coursetuition=0;
        var newfoundland=255.00;
        var canada=333.00;
        var international=1146.00;
        var numcourses= document.getElementsByName('coursenum')[0].text;
        if (currentresident=="newfoundland"){
            coursetuition=numcourses*newfoundland;
        }
        else if (currentresident=="canada"){
            coursetuition=numcourses*canada;
        }
        else (currentresident=="outside"){
            coursetuition=numcourses*international;
        }
        //distance fee
       
        var distFee=0;
        var distNF=51.00;
        var distint=102.00;
        
       
        if (currentresident=="newfoundland"){
            distFee=numcourses*distNF;
        }
        else (currentresident=="canada"){
            distFee=numcourses*distint;
        }
        //campus Renewal fee
        var campusrenewal = numcourses*50.00;
   
        //subtotal 
        var coursesubtotal = coursetuition+distFee+campusrenewal;

        //Semester based Fees
        var winternum=document.getElementsByName('winter')[0].text;
        var springnum=document.getElementsByName('spring')[0].text;
        var fallnum=document.getElementsByName('fall')[0].text;
        //student service fees *50.00
        var stuServiceFee = (winternum+springnum+fallnum)*50.00;

        //student union
        var stuUnion =0;
        if (partTime=="yes"){
            stuUnion=(winternum+springnum+fallnum)*20.23;
        }
        else {
            stuUnion=(winternum+springnum+fallnum)*47.22;
        }
        
        //cfosProv and fed fee
        var cfosProv=(winternum*4.57)+(fallnum*4.57);
        var cfosFed = (winternum*4.57)+(fallnum*4.57);
        var mediafee=(winternum+springnum+fallnum)*4.00;

        //subtotal semester based fees
        var semSubTotal = stuServiceFee+stuUnion+cfosProv+cfosFed+mediafee;


        //optional Fees
        //student health plan newfoundland
        var stuHealthPlan = 0;
        if (healthplan=="yes"){
            stuHealthplan= (winternum+springnum+fallnum)*89.00;
        }
        else {
            stuHealthplan=0;
        }
        //student dental plan newfoundland
        var stuDentalPlan = 0;
        if (dentalplan=="yes"){
            stuDentalplan= (winternum+springnum+fallnum)*71.50;
        }
        else {
            stuDentalplan=0;
        }
        //student Recreation fee
        var recreationFee = 0;
        if (recreationfee=="yes"){
            recreationFee= (winternum+springnum+fallnum)*61.14;
        }
        else {
            recreationFee=0;
        }
        //subtotal optional fees
        var optionalSubtotal = stuHealthPlan+stuDentalPlan+recreationFee;




        //Overall subtotals
        var coursebased = coursesubtotal;
        var semesterbased = semSubTotal;
        var optionalBased = optionalSubtotal;
        var total = coursesubtotal+semSubTotal+optionalSubtotal;

  

    }

    }
