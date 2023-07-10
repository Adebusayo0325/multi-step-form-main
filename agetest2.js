// let birthYear = 1984;
// let birthMonth = ;
// let birthDate = 
let leapStandard = 1984;
let monthsArr = [1, 2 ,3 ,4 ,5 ,6, 7, 8, 9 , 10, 11, 12];
// const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    let currentDate = date.getDate();
    let dateToday;

// function calcDays(){
// let remDays 
// }
function calculateAge (birthYear, birthMonth, birthDate){
    let monnthedDays ;
    let remainingYear;
    let AgedMonth;
    let AgedDays;
    let Age = year - birthYear ;
     

    let RemainingMonth ;
    if(year === year){
             RemainingMonth = birthMonth > (month + 1) ? (birthMonth -  (month + 1)) :  ((month + 1) - birthMonth);
    }
     RemainingMonth = birthMonth > (month + 1) ? (birthMonth -  (month + 1)) :  ((month + 1) - birthMonth);

        let remainingDays ;  

    monthsArr.forEach((monthed, indx) => {
 dateToday = (monnthedDays - currentDate) //+ monnthedDays
// remainingDays =  (monnthedDays - birthDate) - dateToday


console.log(remainingDays)

// if(birthMonth > monthed){

//     dateToday  +=  monnthedDays
//         remainingDays = (monnthedDays - birthDate) - dateToday

//     console.log(remainingDays)
// }
        if(year % leapStandard && indx ===  2  ){
            if((month + 1 ) === 2){
            monnthedDays === 29
            }
            console.log(year % leapStandard )

        }
        if((month+ 1) === 2){
            monnthedDays === 28
        }
        if(monthed === (month + 1)){
                    remainingDays =  (monnthedDays - currentDate) -  (monnthedDays - birthDate)

        }
         if(monthed !== (month + 1)){
                    remainingDays =  (monnthedDays - currentDate) -  (monnthedDays - birthDate)

        }
        
       if(monthed === 8){
              monnthedDays === 31      // remainingDays+= 1
       }
         if(monthed  === 9){
        monnthedDays === 31;
        // remainingDays = (monnthedDays - currentDate) -  (monnthedDays - birthDate)

       }
       //addd november
        if(monthed % 2 === 0){
      console.log(monthed)
monnthedDays = 30
        }
        if(monthed % 2 !== 0){
            monnthedDays === 31
        }
    })
// && (month+ 1) === 9

if( birthMonth >= month){
        Age = year - birthYear - 1 ;
remainingYear = year + 1
RemainingMonth = birthMonth -  (month + 1);

for(i = 1 ; i <= RemainingMonth ; i++){

           dateToday  +=  monnthedDays
remainingDays = (birthDate > currentDate) ? (dateToday - (monnthedDays - birthDate)) :  ((monnthedDays - birthDate) - dateToday);
    console.log(i)

 

            console.log(remainingDays)


}
}
let remainingMonthDays = monnthedDays - birthDate
console.log(remainingMonthDays)
if( birthMonth <= (month + 1)){
        Age = year - birthYear ;
remainingYear = year + 1
remainingDays = (birthDate >= currentDate) ? (dateToday - (monnthedDays - birthDate)) :  ((monnthedDays - birthDate) - dateToday);

AgedMonth = (12 - birthMonth) + (birthMonth - RemainingMonth);
AgedMonth = AgedDays === 0 ? ((month ) - birthMonth) : ((month + 1 ) - birthMonth);

for(i = 1 ; i <= RemainingMonth ; i++){

           dateToday  +=  monnthedDays
        AgedDays = 0
        AgedMonth = (remainingMonthDays  >= birthDate) ?  ((month + 1 ) - birthMonth) : ((month ) - birthMonth);
if(currentDate !== birthDate && birthDate < currentDate){
    console.log(currentDate)
  AgedMonth =   ((month  ) - birthMonth) ;
console.log(monnthedDays)
AgedDays =  (monnthedDays - remainingMonthDays) + dateToday ;

}
else if (currentDate === birthDate){
    AgedDays  === 0

}
else{
        AgedDays = ( ( (monnthedDays - remainingMonthDays) - currentDate ) )  ;


}
    console.log(i)
            console.log(remainingDays)
            console.log(AgedDays)

}
}


    return ((birthMonth >= month) ? ` ${Age} : ${RemainingMonth} : ${remainingDays}` : ` ${Age} : ${AgedMonth} : ${AgedDays}` )
}
console.log(calculateAge(2022, parseInt('8'), parseInt('26')))

