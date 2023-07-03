const inputs = document.querySelectorAll('.input-case');

let noOfClicks = 0;
inputs.forEach(input => {

next1Btn.addEventListener("click", function (e)  {
  if(!input.value){
 alert('pls fill the form')

  }
  else{

  e.preventDefault();
 
  stepRegulate();
  next1Page();
  }
});


});