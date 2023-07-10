let leapStandard = 1984;
let monthsArr = [1, 2 ,3 ,4 ,5 ,6, 7, 8, 9 , 10, 11, 12];
// const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    let currentDate = date.getDate();
    let dateToday;
let remainingMonthDays ;

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
 dateToday = (monnthedDays - currentDate) 
        if(year % leapStandard === 0 && indx ===  2  ){
            if(monthed === 2){
            monnthedDays === 29
            }

        }
        if(monthed === 2){
            monnthedDays === 28
        }
        if(monthed === (month + 1)){
        remainingDays =  (monnthedDays - currentDate) -  (monnthedDays - birthDate)

        }
         if(monthed !== (month + 1)){
        remainingDays =  (monnthedDays - currentDate) -  (monnthedDays - birthDate)
        }
        
       if(monthed === 8){
              monnthedDays = 31

       }
         if(monthed  === 9){
        monnthedDays = 31;

       }
       //addd november
       if(monthed === 11 ){
        monnthedDays = 30
       }
        if(monthed % 2 === 0){
      console.log(monthed)
monnthedDays = 30
        }
        if(monthed % 2 !== 0){
            monnthedDays = 31
        }
        if(monthed === 12 ){
        monnthedDays = 31
       }
    })
if(birthMonth === (month +  1)){
 remainingMonthDays = monnthedDays - birthDate
if(currentDate > birthDate){
         Age = year - birthYear - 1 ;
         console.log(Age)
AgedMonth = ((month ) - birthMonth);
RemainingMonth =(12 - birthMonth) + (birthMonth - RemainingMonth - 1);
remainingDays = (monnthedDays - remainingMonthDays) + dateToday ;
}
if(currentDate < birthDate){
            Age = year - birthYear  ;
AgedMonth = ((month ) - birthMonth);
RemainingMonth = 0;
remainingDays =  (dateToday - (monnthedDays - birthDate))
}
}
if( birthMonth > (month + 1)){
        Age = year - birthYear - 1 ;
remainingYear = year + 1
RemainingMonth = birthMonth -  (month + 1);
//iterATION
for(i = 1 ; i <= RemainingMonth ; i++){

           dateToday  +=  monnthedDays
remainingDays = (birthDate > currentDate) ? (dateToday - (monnthedDays - birthDate)) :  ((monnthedDays - birthDate) - dateToday);
}
}
 remainingMonthDays = monnthedDays - birthDate
if( birthMonth < (month + 1)){
        Age = year - birthYear ;
remainingYear = year + 1
remainingDays = (birthDate >= currentDate) ? (dateToday - (monnthedDays - birthDate)) :  ((monnthedDays - birthDate) - dateToday);

AgedMonth = (12 - birthMonth) + (birthMonth - RemainingMonth);
AgedMonth = AgedDays === 0 ? ((month ) - birthMonth) : ((month + 1 ) - birthMonth);

for(i = 1 ; i <= RemainingMonth ; i++){
           dateToday  +=  monnthedDays
        AgedMonth = (remainingMonthDays  >= birthDate) ?  ((month + 1 ) - birthMonth) : ((month ) - birthMonth);
if(currentDate !== birthDate && birthDate < currentDate){
  AgedMonth =   ((month  ) - birthMonth) ;
AgedDays =  (monnthedDays - remainingMonthDays) + dateToday ;

}
else if (currentDate === birthDate){
    AgedDays  === 0
}
else{
        AgedDays = ( ( (monnthedDays - remainingMonthDays) - currentDate ) )  ;
}
}
}
    return ((birthMonth >= month) ? ` ${Age} : ${RemainingMonth} : ${remainingDays}` : ` ${Age} : ${AgedMonth} : ${AgedDays}` )
}
console.log(calculateAge(2022, parseInt('6'), parseInt('26')))

