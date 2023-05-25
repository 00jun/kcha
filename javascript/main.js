var username;
var birth;
var year;
var month;
var day;

var tsc;
var sac;
var sact;
var isc;

var cnOne, cnTwo, cnThree, cnFour;

function process() {

    var frm = document.forms['frm'];

    username = frm['username'].value;

    birth = frm['jumin'].value;
    birth = birth.split('-')
    
    year = birth[0]; 
    month = birth[1];
    day = birth[2];
    
    year = year.split('');
    month = month.split('');

    var tcc = day.replace(/(^0+)/, "");

    day = day.split('');
    
    var monday = parseInt(month[0]) + parseInt(month[1]) + parseInt(day[0]) + parseInt(day[1]);

    var year_sum = parseInt(year[0]) + parseInt(year[1]) + parseInt(year[2]) + parseInt(year[3]);
    
    var conum = monday + year_sum;
    conum = conum.toString();
    
    var fic = conum;
    fic = fic.toString();

    var sec = parseInt(fic[0]) + parseInt(fic[1]);
    sec = sec.toString();

    if (sec.length == 2) {
        var thc = parseInt(sec[0]) + parseInt(sec[1]);
        cnOne = tcc;
        cnTwo = fic;
        cnThree = sec;
        cnFour = thc;
    } else {
        cnOne = tcc;
        cnTwo = fic;
        cnThree = 0;
        cnFour = sec;
    }
    tsc = "./images/"+cnOne+".png";
    sac = "./images/"+cnTwo+".png";
    sact = "./images/"+cnThree+".png";
    isc = "./images/"+cnFour+".png";

    make();
}
