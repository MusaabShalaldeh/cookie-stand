'use strict'

let workHours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ',
                    '1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ']


let Seattle = {
    locationName: "Seattle",
    minCust:25,
    maxCust:65,
    avgSales:6.3,
}

let Tokyo = {
    locationName: "Tokyo",
    minCust:3,
    maxCust:24,
    avgSales:1.2,
}

let Dubai = {
    locationName: "Dubai",
    minCust:11,
    maxCust:38,
    avgSales:3.7,
}

let Paris = {
    locationName: "Paris",
    minCust:20,
    maxCust:38,
    avgSales:2.3,
}


let Lima = {
    locationName: "Lima",
    minCust:2,
    maxCust:16,
    avgSales:4.6,
}

//using this to make my life easier, I know this is for tomorrow's lab
function PrintOutInformation(object)
{
    let parent = document.getElementById("InfoContainer");
    let header = document.createElement("h3");
    let selfContainer = document.createElement("div");
    let unorderedList = document.createElement('ul');

    
    parent.appendChild(selfContainer);
    selfContainer.appendChild(header);
    selfContainer.appendChild(unorderedList);

    header.textContent = object.locationName+':';

    let total = 0;
    
    for (let i = 0; i < workHours.length; i++) {
        let listItem = document.createElement("li");
        let randomValue = getRandomIntInclusive(object.minCust, object.maxCust);
        total += randomValue;
        listItem.textContent = workHours[i] + randomValue;
        unorderedList.appendChild(listItem);
    }

    let listItem = document.createElement("li");
    listItem.textContent = "Total: "+total;
    unorderedList.appendChild(listItem);
}



PrintOutInformation(Seattle);
PrintOutInformation(Tokyo);
PrintOutInformation(Dubai);
PrintOutInformation(Paris);
PrintOutInformation(Lima);


//-------------------------------------------
//Helper Functions
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
//-------------------------------------------