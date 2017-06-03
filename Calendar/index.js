
var nyear = new Date().getFullYear();
var nmonth = new Date().getMonth()+1;
var monthName=["","January" ,"February","March","April","May" ,
"June" ,"July","August" ,"September" ,"October" ,"November","December"]
calendar(nyear,nmonth);
showDate(nyear,monthName[nmonth])

var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];
prev.addEventListener('click',function(){
    nmonth--;
    if(nmonth<1) {nmonth=12,nyear--}
    calendar(nyear,nmonth);
    showDate(nyear,monthName[nmonth])
},false)
next.addEventListener('click',function(){
    nmonth++;
    if(nmonth>12) {nmonth=1,nyear++}
    calendar(nyear,nmonth);
    showDate(nyear,monthName[nmonth])
},false)

function showDate(nyear,nmonth){
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    year.innerText = nyear;
    month.innerText = nmonth;
}

function calendar(year, month) {
    var bLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;//判断闰年否
    var nCount = [0, 31, bLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || 0;//当月天数
    var nStart = new Date(year, month - 1, 1).getDay();//开始星期几
    nStart = (nStart - 1 + 7) % 7;
    // 当前
    var oNow = new Date();
    var nNowDate = oNow.getDate();//当前几号
    var bCurrent = oNow.getFullYear() === year && oNow.getMonth() + 1 === month;//是否为今年或今月

    // 渲染
    var aTd = [].slice.call(document.getElementsByTagName('td'), 0);
    var nVal = 1;
    aTd.forEach(function (oTd, nIndex) {
        oTd.className = bCurrent && nVal === nNowDate ? 'current' : '';
        if (nIndex >= nStart && nVal <= nCount) {
            oTd.innerHTML = nVal;
            nVal++;
        } else {
            oTd.innerHTML = '';
        }
    });
}