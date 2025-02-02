function cal(){
    let year;
    let mon;
    let day;
    let cyear = parseInt(cdate.value.slice(0,4),10);
    let cmon = parseInt(cdate.value.slice(5,7),10);
    let cday = parseInt(cdate.value.slice(8,10),10);
    console.log(cyear,cmon,cday);

    let dobyear = parseInt(dob.value.slice(0,4),10);
    let dobmon = parseInt(dob.value.slice(5,7),10);
    let dobday = parseInt(dob.value.slice(8,10),10);
    console.log(dobyear,dobmon,dobday);

    if(cday>=dobday){
        day = cday-dobday;
    }
    else{
        day = cday + new Date(cyear,cmon-1,0).getDate() -dobday;
        cmon -=1;
    }

    if(cmon>=dobmon){
        mon = cmon - dobmon;
    }
    else{
        mon = cmon + 12 - dobmon;
        cyear -=1;
    }
    
    year = cyear - dobyear;
    console.log(year,mon,day);

    if(year<0)
        agetxt.innerHTML = 'Person not Borned! Please enter valid date.';
    else 
        agetxt.innerHTML = year + " years" +" "+ mon + " months"+" "+day +" days";
}