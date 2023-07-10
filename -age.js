let birthYear = 1984;
let birthMonth = parseInt('6');
let birthDate = parseInt('6')
let leapStandard = 1984;
let monthsArr = [1, 2 ,3 ,4 ,5 ,6, 7, 8, 9 , 10, 11, 12];
const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    let currentDate = date.getDate();
    let dateToday;

function calcDays(){
let remDays 
}
function calculateAge (){
    let monnthedDays ;
    let Age = year - birthYear;
    let RemainingMonth = birthMonth -  (month + 1);
        let remainingDays ;  

    monthsArr.forEach((monthed, indx) => {
 dateToday = (monnthedDays - currentDate) //+ monnthedDays
remainingDays = dateToday - (monnthedDays - birthDate) 

console.log(remainingDays)

// if(birthMonth > monthed){

//     dateToday  +=  monnthedDays
//         remainingDays = (monnthedDays - birthDate) - dateToday

//     console.log(remainingDays)
// }
        if(year % leapStandard && indx ===  2  ){
            if((month + 1 ) <= 2){
            monnthedDays = 29
            }
            console.log(year % leapStandard )

        }
        if(monthed === (month + 1)){
                    remainingDays = (monnthedDays - birthDate) - (monnthedDays - currentDate)

        }
        
       if(monthed === 8){
              monnthedDays = 31      // remainingDays+= 1
       }
         if(monthed  === 9){
        monnthedDays = 31;
        remainingDays = (monnthedDays - birthDate) - (monnthedDays - currentDate)

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
if( birthMonth <= month){
for(i = 1 ; i <= RemainingMonth ; i++){

           dateToday  +=  monnthedDays
        remainingDays = (monnthedDays - birthDate) - dateToday
    console.log(i)

 

            console.log(remainingDays)


}
}

    return ` ${Age} : ${RemainingMonth} : ${remainingDays}`
}

console.log(calculateAge())

