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
        else (currentresident=="outside");{
            coursetuition=numcourses*international;
        }
        //coursetuition.calculator('coursetuition');
        return coursetuition;
        //distance fee
       
        var distFee=0;
        var distNF=51.00;
        var distint=102.00;
        
       
        if (currentresident=="newfoundland"){
            distFee=numcourses*distNF;
            return distFee;
        }
        else (currentresident=="canada");{
            distFee=numcourses*distint;
            return distFee;
        }
        //campus Renewal fee
        var campusrenewal = numcourses*50.00;
        return campusrenewal;
   
        //subtotal 
        var coursesubtotal = coursetuition+distFee+campusrenewal;
        return coursesubtotal;

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
            return stuUnion;
        }
        else {
            stuUnion=(winternum+springnum+fallnum)*47.22;
            return stuUnion;
        }
        
        //cfosProv and fed fee
        var cfosProv=(winternum*4.57)+(fallnum*4.57);
        return cfosProv;
        var cfosFed = (winternum*4.57)+(fallnum*4.57);
        return cfosFed;
        var mediafee=(winternum+springnum+fallnum)*4.00;
        return mediafee;


        //subtotal semester based fees
        var semSubTotal = stuServiceFee+stuUnion+cfosProv+cfosFed+mediafee;
        return semSubTotal;

        //optional Fees
        //student health plan newfoundland
        var stuHealthPlan = 0;
        if (healthplan=="yes"){
            stuHealthplan= (winternum+springnum+fallnum)*89.00;
            return stuHealthPlan;
        }
        else {
            //stuHealthPlan=0;
            return stuHealthPlan;
        }
        //student dental plan newfoundland
        var stuDentalPlan = 0;
        if (dentalplan=="yes"){
            stuDentalplan= (winternum+springnum+fallnum)*71.50;
            return stuDentalPlan;
        }
        else {
            //stuDentalplan=0;
            return stuDentalPlan;

        }
        //student Recreation fee
        var recreationFee = document.getElementsByName("recreationfee")[0].text;
        if (recreationfee=="yes"){
            recreationFee= (winternum+springnum+fallnum)*61.14;
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
