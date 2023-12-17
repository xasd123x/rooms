$("style").last().append(`
#users .uzr.hawy1 .hawy_star1 {
width: 61px;
margin-top: -2px;
height: 60px;
margin-left: -4px;
}
#upro .hawy1 .light.fl.hawypro.break {
    background-image: url(https://up6.cc/2023/12/170224184664141.png);
    background-size: 100%;
}

`);
var l_itvhawy=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvhawy);
        $("#users .uzr:contains('هااوي')").addClass('hawy1');
        $("#users .uzr.hawy1 .fitimg.u-pic").append('<img class="hawy_star1" src="https://up6.cc/2023/02/167579621323341.png">');
        $("#upro .hawy1 .light.fl.pro.break").append('<img class="light.fl.hawypro.break" src="https://up6.cc/2023/12/170224184664141.png">');
    }
}, 10000);
