$(`<style>
.nosel.d-flex.room.r18c07db2c9cx364cd213 .d-flex.fitimg.u-pic {
  letter-spacing: 1px;
  background-size: 108% 108%;
  -webkit-text-fill-lor: white;
  animation: grad 2s cubic-bezier(.445,.05,.55,.95) alternate infinite;
}
.nosel.d-flex.room.r18c07db2c9cx364cd213 .label.label-primary.fa.fa-user.uc {
  letter-spacing: 2px;
  -webkit-text-fill-color: #ffffff;
  border-radius: 10px 0px 10px 0px !important;
  height: 27px;
  margin-top: 0px !important;
  margin-bottom: 60px !important;
  margin-left: 0px!important;
  margin-right: 0px!important;
}
.nosel.d-flex.room.r18c07db2c9cx364cd213.bord {border-inline: 0px solid #4c121e !important;}
.nosel.d-flex.room.r18c07db2c9cx364cd213 .mini.u-msg.flex-grow-1 {
    text-align: center;
    margin-top: 53px !important;
	margin-left: 11px;
	-webkit-text-fill-color: transparent;
	animation: textclip 2s linear infinite;
	background-image: url(https://up6.cc/2023/02/167536001950611.gif);
	-webkit-background-clip: text;
	color: transparent !important;
	background-size: 90% 100%;
	opacity:0;
}
.nosel.d-flex.room.r18c07db2c9cx364cd213 {
    background-image: url(https://up6.cc/2024/01/170577978781741.gif);
    background-size: cover;
    border-radius: 15px 0px 15px 0px;
    display: inline-block;
}
.nosel.d-flex.room.r18c07db2c9cx364cd213 .d-flex.fitimg.u-pic {
  border-radius: 100px;
  border: 2px solid #cc8321;
  letter-spacing: 1px;
  background-size: 108% 108%;
  -webkit-text-fill-color: white;
  animation: grad 2s cubic-bezier(.445,.05,.55,.95) alternate infinite;
  min-width: 62px !important;
  width: 62px !important;
  min-height: 60px !important;
  max-height: 60px !important;
  display: none;
}
.nosel.d-flex.room.r18c07db2c9cx364cd213 .u-topic.dots.flex-grow-1 {
  text-transform: uppercase;
  -webkit-text-fill-color: #e8a64d00;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 22px !important;
  background-image: url(https://up6.cc/2023/01/167391087161381.gif);
  -webkit-background-clip: text;
  color: transparent !important;
  background-size: 100% 100%;
  margin-top: 10px;
  display: none;
}
@keyframes textclip {to {background-position: 200% center;}}</style>`).insertBefore('body');


$(`<style>
@keyframes huerotate {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rorate(360deg);
    }
}</style>`).insertBefore('body');
$("style").last().append(`
#room.sukara1 #mic{
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 5px rgb(0 0 0), 0 0 0 0px #000000;
background-image: url(https://up6.cc/2024/01/170603106798281.png);
background-size: cover;
border-radius:  10px 0 10px!important;
}
`);
var sukara = false;
setInterval(function () {
    if (myroom == '18c07db2c9cx364cd213') {
        if (sukara == false) {
            sukara = true;
                $('#d0, #users, #d2, #mic, #settings, #rooms, #room, #d0, #chats, #d2bc, #muteall, #wall, #dpnl, #upro').addClass('sukara1');
		$('input, button.rsave.btn.btn-primary.fl, button.border.btn.label.label-success.fl.fa.fa-plus, button.blike.corner.btn.minix.btn-danger.fa.fa-heart, .fl.borderg, .fl.u-pic.fitimg, .dots, .tc, .label.fl.label-primary, .btn.btn-primary.u-nickc.fr.fa.fa-save, .modal-header.label-primary, .corner.border.label.label-primary,.head.d-flex.nosel.bg.fl, .rsave.btn.btn-primary.fr, .fa.fa-send.sndpm.fl.btn.btn-primary, .fr.fa.fa-share-alt.sndfile.fl.btn.btn-primary, .fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary, .bdel.corner.btn.minix.btn-primary.fa.fa-times, .fa.fa-send.sndbc.fl.btn.btn-primary').addClass('sukara1');
        }
    } else {
        if (sukara == true) {
            sukara = false;
                $("#d0, #users, #d2, #mic, #settings, #rooms, #room, #d0, #chats, #d2bc, #muteall, #wall, #dpnl, #upro").removeClass('sukara1');
		$('input, button.rsave.btn.btn-primary.fl, button.border.btn.label.label-success.fl.fa.fa-plus, button.blike.corner.btn.minix.btn-danger.fa.fa-heart, .fl.borderg, .fl.u-pic.fitimg, .dots, .tc, .label.fl.label-primary, .btn.btn-primary.u-nickc.fr.fa.fa-save, .modal-header.label-primary, .corner.border.label.label-primary, .head.d-flex.nosel.bg.fl, .rsave.btn.btn-primary.fr, .fa.fa-send.sndpm.fl.btn.btn-primary, .fr.fa.fa-share-alt.sndfile.fl.btn.btn-primary, .fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary, .bdel.corner.btn.minix.btn-primary.fa.fa-times, .fa.fa-send.sndbc.fl.btn.btn-primary').removeClass('sukara1');
            } 
        } 
    }, 10);
