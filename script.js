const arcade = document.getElementById("arcade");
const arcaded = document.getElementById("arcaded");
const advanced = document.getElementById("advanced");
const advanceded = document.getElementById("advanceded");
const pro = document.getElementById("pro");
const proed = document.getElementById("proed");

//add ons

const addons = document.querySelectorAll(".add-ons");
const picks = document.querySelectorAll(".pick");
//other elements
const next1Btn = document.querySelector("#firstNexter");
const next2Btn = document.querySelector("#secondNexter");
const next3Btn = document.querySelector("#thirdNexter");
// const nextBtn = document.querySelector('.btn-next');
const content = document.querySelectorAll(".action");
const prev1Btn = document.querySelector("#firstprev");
const prev2Btn = document.querySelector("#secondprev");
const change = document.querySelector("#change");
const stepBtn = document.querySelectorAll(".btn-step");

//timers

const month = document.querySelector(".mon");
const year = document.querySelector(".year");
const timeChoice = document.querySelector("#time-input");
const OfferYear = document.querySelectorAll(".offer");
const $Arcade = document.querySelector(".mon0");
const $Pro = document.querySelector(".moon0");
const $Advanced = document.querySelector(".monn0");

//finale

const cust = document.getElementById("cuspro");
const large = document.getElementById("larstorg");
const onserve = document.getElementById("onserve");
const $Online = document.querySelector(".y0");
const $Profile = document.querySelector(".yy0");
const $Storage = document.querySelector(".yy00");
const $chosen = document.querySelector(".chosen");

// step 4 element
const step2Choice = document.getElementById("made");
const step2price = document.getElementById("firstyear");

const checkers = document.querySelectorAll(".plan");
let ver;
arcade.checked = true;
if (arcade.checked) {
  step2Choice.innerHTML = `${
    arcaded.innerText
  }  (<span class="length">${seasonVerify(ver)}</span>)`;
  step2price.innerText = $Arcade.innerText;
}

checkers.forEach((checker) =>
  checker.addEventListener("click", (e) => singleChoice(e.target))
);

function seasonVerify(ver) {
  if (timeChoice.checked) {
    return (ver = `Yearly`);
  } else {
    return (ver = `Monthly`);
  }
}
// singleChoice()

// picks.forEach((pick, indx) => {
//   pick.addEventListener("click", (e) =>  {
//     if(pick.checked) {
//   singleChoice()

//   getAddOns()
// }
// })
// })

// }
function uncheck() {
  checkers.forEach((checker) => (checker.checked = false));
}

month.classList.add("toggl");

let current = 0;
let season = [
  {
    month: `9`,
    year: `90`,
  },
  {
    month: `12`,
    year: `120`,
  },
  {
    month: `15`,
    year: `150`,
  },
];

function rateMonth(choice) {
  $Arcade.innerText = `$${choice[current].month}/mo`;
  $Advanced.innerText = `$${choice[current + 1].month}/mo`;
  $Pro.innerText = `$${choice[current + 2].month}/mo`;
}

function rateYear(choice) {
  $Arcade.innerText = `$${choice[current].year}/yr`;
  $Advanced.innerText = `$${choice[current + 1].year}/yr`;
  $Pro.innerText = `$${choice[current + 2].year}/yr`;
}

function singleChoice(checkered) {
  // if( arcade.checked && advanced.checked && pro.checked){
  if (arcade === checkered) {
    arcade.checked = true;
    advanced.checked = false;
    pro.checked = false;
  }

  if (advanced === checkered) {
    advanced.checked = true;
    arcade.checked = false;
    pro.checked = false;
  }

  if (pro === checkered) {
    pro.checked = true;
    arcade.checked = false;
    advanced.checked = false;
  }
}
function getMadeChoice() {
  if (arcade.checked && !advanced.checked && !pro.checked) {
    if (timeChoice.checked) {
      step2Choice.innerHTML = `${arcaded.innerText}  (<span class="length">Yearly</span>)`;

      step2price.innerText = `$${season[current].year}/yr`;
    } else {
      step2Choice.innerHTML = `${arcaded.innerText}  (<span class="length">Monthly</span>)`;

      step2price.innerText = `$${season[current].month}/mo`;
    }
  }

  if (advanced.checked && !arcade.checked && !pro.checked) {
    if (timeChoice.checked) {
      step2Choice.innerHTML = `${advanceded.innerText}  (<span class="length">Yearly</span>)`;
      step2price.innerText = `$${season[current + 1].year}/yr`;
    } else {
      step2Choice.innerHTML = `${arcaded.innerText}  (<span class="length">Monthly</span>)`;
      step2price.innerText = `$${season[current + 1].month}/mo`;
    }
  }

  if (pro.checked && !advanced.checked && !arcade.checked) {
    if (timeChoice.checked) {
      step2Choice.innerHTML = `${proed.innerText}  (<span class=proed.innerText"length">Yearly</span>)`;
      step2price.innerText = `$${season[current + 2].year}/yr`;
    } else {
      step2Choice.innerHTML = `${proed.innerText}  (<span class="length">Monthly</span>)`;
      step2price.innerText = `$${season[current + 2].month}/mo`;
    }
  }
}
// stepRegulate()

//step 3
// const $Online = document.querySelector('.y0')
// const $Profile = document.querySelector('.yy0')
// const $Storage = document.querySelector('.yy00')

// const  = document.querySelector('.yy00')
//step 4

// const
function getAddOns() {
  // total()
  picks.forEach((pick, indx) => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    if (pick.checked) {
      div.classList.add("second");
      h3.classList.add("added");
      h4.classList.add("addition");
      if (indx === 0) {
        h3.innerText = onserve.innerText;
        h4.innerText = $Online.innerText;
      }
      if (indx === 1) {
        h3.innerText = large.innerText;
        h4.innerText = $Storage.innerText;
      }
      if (indx === 2) {
        h3.innerText = cust.innerText;
        h4.innerText = $Profile.innerText;
      }

      div.appendChild(h3);
      div.appendChild(h4);

      return $chosen.appendChild(div);
    }
  });
}

// getAddOns()
let addSect = [
  {
    month: `1`,
    year: `10`,
  },
  {
    month: `2`,
    year: `20`,
  },
  {
    month: `2`,
    year: `20`,
  },
];

function addMonth(choice) {
  $Online.innerText = `+$${choice[current].month}/mo`;
  $Storage.innerText = `+$${choice[current + 1].month}/mo`;
  $Profile.innerText = `+$${choice[current + 2].month}/mo`;
}

function addYear(choice) {
  $Online.innerText = `+$${choice[current].year}/yr`;
  $Storage.innerText = `+$${choice[current + 1].year}/yr`;
  $Profile.innerText = `+$${choice[current + 2].year}/yr`;
}
timeChoice.addEventListener("click", () => choosetime());

function choosetime() {
  if (timeChoice.checked) {
    rateYear(season);
    addYear(addSect);
    month.classList.remove("toggl");
    OfferYear.forEach((offer) => (offer.style.display = "block"));
    return year.classList.add("toggl");
  }

  rateMonth(season);
  addMonth(addSect);
  OfferYear.forEach((offer) => (offer.style.display = "none"));
  year.classList.remove("toggl");
  return month.classList.add("toggl");
}
choosetime();

function addonsHandler() {
  picks.forEach((pick, indx) =>
    !pick.checked
      ? addons[indx].classList.remove("selected")
      : addons[indx].classList.add("selected")
  );
}
addonsHandler();
picks.forEach((pick, indx) =>
  pick.addEventListener("click", (e) =>
    !pick.checked
      ? addons[indx].classList.remove("selected")
      : addons[indx].classList.add("selected")
  )
);
//  getAddOns()

let stepCount = 0;
if (stepCount < 1) {
  stepCount === stepBtn.length - 1;
} else if (stepCount > stepBtn.length - 1) {
  stepCount = 0;
}
function stepRegulate() {
  stepRemove();
  if (pageCount > 3) {
    return stepBtn[pageCount - 1].classList.add("action-step");
  } else {
    return stepBtn[pageCount].classList.add("action-step");
  }
}

let m = 0;
let n = 0;
let o = 0;
function stepRemove() {
  stepBtn.forEach((step) => {
    step.classList.remove("action-step");
  });
}
const form = document.getElementById('form-ver');
form.addEventListener('submit', (e)  => {
   e.preventDefault()
stepRegulate();

  next1Page();
})
let noOfClicks = 0;

// next1Btn.addEventListener("submit", function (e)  {
//   e.preventDefault();
 
//   stepRegulate();
//   next1Page();
// });

next2Btn.addEventListener("click", () => {
  stepRegulate();
  singleChoice();
  next1Page();
  getMadeChoice();
});
next3Btn.addEventListener("click", () => {
  next1Page();
  singleChoice();
  stepRegulate();
  getMadeChoice();
  // if(noOfClicks < 1){
  //   getAddOns()
  // }
 
  noOfClicks++;
  singleChoice();
  getAddOns();
});
let pageCount = 1;
if (pageCount < 1) {
  pageCount === content.length;
} else if (pageCount > content.length) {
  pageCount === 1;
}
function next1Page() {
  content.forEach((page, indx) => {
    if (0 > pageCount) {
      pageCount = indx;
      stepCount = indx;
      stepRegulate();
    }
    page.style.display = "none";
    content[pageCount].style.display = "block";
    stepRegulate();
    singleChoice();
    total(m, n, o);
    console.log(indx);
  });
  stepCount++;
  pageCount++;
}

// function filter () {
//   if(div.childElementCount > 3){
// div.removeChild(h3)
// div.removeChild(h4)
// }
// }
prev1Btn.addEventListener("click", () => prev1Page());
change.addEventListener("click", () => changer());
prev2Btn.addEventListener("click", () => {
  prev2Page();
  // filter()
});
function prev1Page() {
  stepRegulate();
  content.forEach((page, indx) => {
    if (indx === 1) {
      content[indx - 1].style.display = "block";
      stepRemove();
      getMadeChoice();
      stepBtn[indx - 1].classList.add("action-step");
      return (content[indx].style.display = "none");
    }

    pageCount = indx - 1;
    stepCount = indx - 1;
    //  return page.style.display = " none"
  });
  stepCount--;
  pageCount--;
}

function changer() {
  if (noOfClicks >= 2) {
    $chosen.innerHTML = `<div class="first first-choice">
   <div class="change-option"> <h3 id="made">Arcade (<span class="length">${seasonVerify(
     ver
   )}</span>)</h3>

    <a id="change" href="#">Change</a>
    </div>
<h3 id="firstyear">$90/yr</h3>
</div>
`;
  }
  stepRegulate();
  noOfClicks++;
  singleChoice();
  content.forEach((page, indx) => {
    if (indx === 1) {
      stepRemove();
      stepBtn[indx].classList.add("action-step");
      return (page.style.display = "block");
    }
    pageCount = indx - 1;
    stepCount = indx - 1;
    return (page.style.display = " none");
  });
}
function prevxPage() {
  stepRegulate();
  content.forEach((page, indx) => {
    if (indx < pageCount) {
      content[pageCount - 1].style.display = "block";
      // page.style.display = "block"
    }
    content[pageCount].style.display = "none";
    // content[pageCount -1].style.display = "none"
  });
  stepCount--;
  pageCount--;
}

function prev2Page() {
  content.forEach((page, indx) => {
    if (indx === 2) {
      stepRemove();
      stepBtn[indx - 1].classList.add("action-step");
      content[indx - 1].style.display = "block";
      return (content[indx].style.display = "none");
    }

    pageCount = indx - 1;
    //  return page.style.display = " none"
  });
  stepCount--;
  pageCount--;
}
let z;
let verify;

let totalprice = document.getElementById("totalx");
function total(a, b, c, z) {
  //arcaded
  if (arcade.checked && !advanced.checked && !pro.checked) {
    if (timeChoice.checked) {
      z = season[current].year;
    } else {
      z = season[current].month;
    }
  }

  if (advanced.checked && !arcade.checked && !pro.checked) {
    if (timeChoice.checked) {
      z = season[current + 1].year;
    } else {
      z = season[current + 1].month;
    }
  }

  if (pro.checked && !advanced.checked && !arcade.checked) {
    if (timeChoice.checked) {
      z = season[current + 2].year;
    } else {
      z = season[current + 2].month;
    }
  }

  //addons
  picks.forEach((pick, indx) => {
    if (pick.checked) {
      if (indx === 0) {
        if (timeChoice.checked) {
          c = addSect[current].year;
        } else {
          c = addSect[current].month;
        }
      }
      if (indx === 1) {
        if (timeChoice.checked) {
          b = addSect[current + 1].year;
        } else {
          b = addSect[current + 1].month;
        }
      }
      if (picks.length > 2) {
        if (indx === 2) {
          if (timeChoice.checked) {
            a = addSect[current + 2].year;
          } else {
            a = addSect[current + 2].month;
          }
        }
      }
    }
  });
  totalprice.innerText = `$${
    parseInt(a) + parseInt(b) + parseInt(c) + parseInt(z)
  }/${seasonVerifyAbbreviation(verify)}`;
  return parseInt(a + b + c + z);
}
function seasonVerifyAbbreviation(verify) {
  if (timeChoice.checked) {
    return (verify = `yr`);
  }
  return (verify = `mo`);
}

total(m, n, o);
getMadeChoice();


const confirmBtn = document.getElementById('confirm');
const FinalAct = document.getElementById('final-act');
const container = document.querySelector('.container');

confirmBtn.addEventListener("click", () => confirmed());

function confirmed(){
    content.forEach((page, indx) => {

    page.style.display = "none";
    // content[pageCount -1].style.display = "none"
  });
  FinalAct.style.display = "block";
  container.classList.add('final-container');
}


  document.querySelectorAll('.input-case').forEach(input=> input.addEventListener('input', () =>{
  if(input.value === ""){
    input.classList.add("error")
  }
  else{
    input.classList.remove('error')
  }
})
  );