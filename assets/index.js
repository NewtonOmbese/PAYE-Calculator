(function(){

//global variables
let getStarted = document.querySelector("#start");
let monthBox = document.querySelector("#month");
let yearBox = document.querySelector("#year");
let yesNSSF = document.querySelector("#yes-nssf");
let noNSSF = document.querySelector("#no-nssf");
let yesNHIF = document.querySelector("#yes-nhif");
let noNHIF = document.querySelector("#no-nhif");
let newRates = document.querySelector("#new-rates");
let oldRates = document.querySelector("#old-rates")
let benefitsInput = document.querySelector("#benefits-input");
let salaryInput = document.querySelector("#salary-input");
let calculateBtn = document.querySelector(".calc-btn");
let period = document.getElementsByName('period');

window.addEventListener('DOMContentLoaded',()=>{
    let salary //= 100000//parseInt(salaryInput.value);
    let benefits //= 5000//parseInt(benefitsInput.value);
    let deduct_nssf //= true;
    let deduct_nhif //= true;
    let monthly = true;
    let isNewRates //= true;

    //handle input change
    document.querySelectorAll("input[type=text]").forEach((input, i) => {
        console.log(input)
        input.addEventListener('change', () => {
            if (i === 0){
                salary = parseInt(input.value);
                console.log(salary)
            }

            if(i === 1){
                benefits = parseInt(input.value);
                console.log(benefits)
            }
        })
    })

    //handler for checkboxes
    yesNHIF.addEventListener('change', function(){
        if(this.checked){
            deduct_nhif = true;
        }
    })

    noNHIF.addEventListener('change', function () {
        if (this.checked) {
            deduct_nhif = false;
        }
    })

    yesNSSF.addEventListener('change', function () {
        if (this.checked) {
            deduct_nssf = true;
        }
    })

    noNSSF.addEventListener('change', function () {
        if (this.checked) {
            deduct_nssf = false;
        }
    })

    newRates.addEventListener('change', function () {
        if (this.checked) {
            isNewRates = true;
        }
    });

    oldRates.addEventListener('change', function () {
        if (this.checked) {
            isNewRates = false;
        }
    });
})

})