let data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

function init() {
    let barDivs = document.querySelectorAll(".bar");
    let maxVal = 0;

    for(let i = 0; i < data.length; i++) {
        if(data[i].amount > maxVal) 
            maxVal = data[i].amount;
    }

    for(let i = 0; i < barDivs.length; i++) {
        let amt = data[i].amount;

        console.log(amt/Math.max() * 100 + "%")
        barDivs[i].style.height = amt/maxVal * 100 + "%";
        barDivs[i].parentElement.querySelector(".bar-value").innerHTML = "$" + amt;
        barDivs[i].addEventListener("click", displayValue);
    }
}

function displayValue(e) {
    let valueDiv = e.target.parentElement.querySelector(".bar-value");
    let active = e.target.classList.contains('active') ? true : false;



    if(active) {
        valueDiv.style.visibility = "hidden";
        e.target.classList.remove('active');
    }
    else {
        valueDiv.style.visibility = "visible";
        e.target.classList.add('active');
    }
    
}
