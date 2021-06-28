'use strict'

let workHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ',
    '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];


let locations = [];

let hourlyTotal = [];

let totalOfTotals = 0;

function ShopLocation(locationName, minCust, maxCust, avgSales) {
    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSales = avgSales;

    this.sales = [];

    locations.push(this);
}

let Seattle = new ShopLocation('Seattle', 25, 65, 6.3);
let Tokyo = new ShopLocation('Tokyo', 3, 24, 1.2);
let Dubai = new ShopLocation('Dubai', 11, 38, 3.7);
let Paris = new ShopLocation('Paris', 20, 38, 2.3);
let Lima = new ShopLocation('Lima', 2, 16, 4.6);





ShopLocation.prototype.renderToTable = function (table) {

    let newRow = document.createElement('tr');
    table.appendChild(newRow);

    let _locationName = document.createElement('th');
    newRow.appendChild(_locationName);
    _locationName.textContent = this.locationName;

    let totalForToday = 0;

    for (let i = 0; i < workHours.length; i++) {

        let randomValue = Math.round(randomNum(this.minCust, this.maxCust) * this.avgSales);
        totalForToday += randomValue;
        this.sales.push(randomValue);

        let tableData = document.createElement('td')
        newRow.appendChild(tableData);
        tableData.textContent = randomValue;
    }

    let lastElement = document.createElement('td');
    newRow.appendChild(lastElement);
    lastElement.textContent = totalForToday;
}

function calculateHourlyTotal()
{
    totalOfTotals = 0;

    for (let i = 0; i < workHours.length; i++) {

        let sumForThisInstace = 0;

        for (let _i = 0; _i < locations.length; _i++) {

            sumForThisInstace += locations[_i].sales[i];
        }

        hourlyTotal.push(sumForThisInstace);

        totalOfTotals += sumForThisInstace;
    }
}




function makeATable() {
    let parent = document.getElementById("InfoContainer");
    let table = document.createElement('table');
    parent.appendChild(table);

    //create top row
    let hoursRow = document.createElement('tr');
    table.appendChild(hoursRow);


    let blank = document.createElement('th');
    hoursRow.appendChild(blank);
    blank.textContent = '--LOCATION--';

    for (let i = 0; i < workHours.length; i++) {
        let tableHeader = document.createElement('th');
        hoursRow.appendChild(tableHeader);
        tableHeader.textContent = workHours[i];
    }

    let totalDaily = document.createElement('th');
    hoursRow.appendChild(totalDaily);
    totalDaily.textContent = 'Daily Location Total:';
    //-----------------------------------------------
    Seattle.renderToTable(table);
    Tokyo.renderToTable(table);
    Dubai.renderToTable(table);
    Paris.renderToTable(table);
    Lima.renderToTable(table);

    

    //create bottom row

    calculateHourlyTotal();

    let totalsRow = document.createElement('tr');
    table.appendChild(totalsRow);

    let totalForEachHour = document.createElement('th');
    totalsRow.appendChild(totalForEachHour);
    totalForEachHour.textContent = 'Total';

    for (let i = 0; i < workHours.length; i++) {
        
        let tableHeader = document.createElement('th');
        totalsRow.appendChild(tableHeader);
        tableHeader.textContent = hourlyTotal[i];
    }

    let endTotal = document.createElement('td');
    totalsRow.appendChild(endTotal);
    endTotal.textContent = 'Total: '+totalOfTotals;

    //-----------------------------------------------
}


makeATable();


//-------------------------------------------
//Helper Functions
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//-------------------------------------------