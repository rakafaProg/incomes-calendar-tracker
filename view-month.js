let daysHTML = document.getElementById('days');

function viewMonth(month, year) {
    let thisMonth = new Date (year, month -1);
    let today = new Date();
    
    for(let i = 0; i < thisMonth.getDay(); i++) {
        let liHTML = document.createElement('li');
        liHTML.innerHTML = '.';
        daysHTML.appendChild(liHTML);
    }
    
    while (thisMonth.getMonth() == month -1) {
        let liHTML = document.createElement('li');
        liHTML.innerHTML = thisMonth.getDate();
        daysHTML.appendChild(liHTML);
        if(isDateEqual(today, thisMonth))
            liHTML.className = 'active';
        thisMonth = addDays(thisMonth, 1);
        
    }
    
    for(i = thisMonth.getDay(); i < 7; i++) {
        let liHTML = document.createElement('li');
        liHTML.innerHTML = '.';
        daysHTML.appendChild(liHTML);
    }
    
}
        
        
        
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function isDateEqual(date1, date2) {
    let dd1 = date1.getDate();
    let dd2 = date2.getDate();
    
    let mm1 = date1.getMonth();
    let mm2 = date2.getMonth();
    
    let yy1 = date1.getYear();
    let yy2 = date2.getYear();
    
    return dd1 == dd2 && mm1 == mm2 && yy1 == yy2;
}