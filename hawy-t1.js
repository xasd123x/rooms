$("style").last().append(`
#upro.hawy1 .light.fl.pro.break {
    background-image: url(https://up6.cc/2023/12/170224184664141.png);
    background-size: 100%;
}
#upro.hawy1 .light.fitimg.fl.u-pic {
    border: 1px solid;
    clip-path: inset(0px round 0px 0px 0px 50px);
    animation: huerotate 2s infinite linear;
    box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 10px rgb(0 0 0), 0 0 0 0px #000;
    #upro.hawy1 .fl.u-pic.fitimg {
    border-radius: 0px 50px 0px 50px !important;
}`);
var l_itvhawy=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvhawy);
        $("#users .uzr:contains('00.0')").addClass('hawy1');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
    }
}, 10000);
