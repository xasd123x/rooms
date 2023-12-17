$("style").last().append(`
#users .uzr.hawy1 .hawy_star1 {
width: 61px;
margin-top: -2px;
height: 60px;
margin-left: -4px;
}
#upro. .hawy1.light.fl.pro.break {
    background-image: url(https://up6.cc/2023/12/170224184664141.png);
    background-size: 100%;
}

`);
var l_itvhawy=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvhawy);
        $("#users .uzr:contains('هااوي')").addClass('hawy1');
        $("#users .uzr.hawy1 .fitimg.u-pic").append('<img class="hawy_star1" src="https://up6.cc/2023/02/167579621323341.png">');
	$("#users .uzr.hawy1 span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://i.ibb.co/47VS4nY/image.png">');
        $("#users .uzr.hawy1 span.uhash, #users .uzr.hawy1 img.co").hide(); 
        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
        $("div#users .uzr.hawy1 .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('athb1');
        $("#movon1").before('<div class="light fl pro break" style="background-image: url(https://up6.cc/2023/12/170224184664141.png);background-size: 100%;"></div>');
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/ubts5AU4kWA" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
