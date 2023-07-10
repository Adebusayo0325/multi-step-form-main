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
            monnthedDays = 29
            }
            console.log(year % leapStandard )

        }
        if(monthed === (month + 1)){
                    remainingDays =  (monnthedDays - currentDate) -  (monnthedDays - birthDate)

        }
         if(monthed !== (month + 1)){
                    remainingDays =  (monnthedDays - currentDate) -  (monnthedDays - birthDate)

        }
        
       if(monthed === 8){
              monnthedDays = 31      // remainingDays+= 1
       }
         if(monthed  === 9){
        monnthedDays = 31;
        // remainingDays = (monnthedDays - currentDate) -  (monnthedDays - birthDate)

       }
       //addd november
        if(monthed % 2 === 0){
      console.log(monthed)
monnthedDays = 30
        }
        if(monthed % 2 !== 0){
            monnthedDays = 31
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
if( birthMonth <= (month + 1)){
        Age = year - birthYear - 1 ;
remainingYear = year + 1
AgedMonth = (12 - birthMonth) + (birthMonth - RemainingMonth);

for(i = 1 ; i <= RemainingMonth ; i++){

           dateToday  +=  monnthedDays
        AgedDays = (monnthedDays - birthDate) + dateToday + (i+ RemainingMonth) +( birthDate);
    console.log(i)

 

            console.log(remainingDays)
            console.log(AgedDays)


}
}
// if( birthMonth < month ){
//         // RemainingMonth = birthMonth > (month + 1) ? (birthMonth -  ((month + 1))) :  ((month + 1) - birthMonth);
//         remainingDays = (monnthedDays - birthDate) - dateToday

// }

    return ((birthMonth >= month) ? ` ${Age} : ${RemainingMonth} : ${remainingDays}` : ` ${Age} : ${AgedMonth} : ${remainingDays}` )
}
console.log(calculateAge(1984, parseInt('5'), parseInt('26')))

