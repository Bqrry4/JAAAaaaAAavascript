/*
#       _     _       _       _                            _       _                                         _          _   
#    _ | |   /_\     /_\     /_\    __ _   __ _   __ _    /_\     /_\    __ _  __ __  __ _   ___  __   _ _  (_)  _ __  | |_ 
#   | || |  / _ \   / _ \   / _ \  / _` | / _` | / _` |  / _ \   / _ \  / _` | \ V / / _` | (_-< / _| | '_| | | | '_ \ |  _|
#    \__/  /_/ \_\ /_/ \_\ /_/ \_\ \__,_| \__,_| \__,_| /_/ \_\ /_/ \_\ \__,_|  \_/  \__,_| /__/ \__| |_|   |_| | .__/  \__|
#                                                                                                               |_|                         
# written by potatoes, special thanks to butter
*/

/* ============================================================
   HARD‑CODED CDN ASSET BASE (SHORT‑URL SAFE)
   ============================================================ */

var str_path =
  "https://cdn.jsdelivr.net/gh/Bqrry4/JAAAaaaAAavascript/JAAAaaaAAavascript/";

/* ============================================================
   AAAaaaAAarays
   ============================================================ */

var arr_screAAAaaaAAams = [
	"AUD_AAAH_01","AUD_AAAH_03","AUD_AAAH_16","AUD_AAAH_04","AUD_AAAH_05",
	"AUD_AAAH_20","AUD_AAAH_06","AUD_AAAH_19","AUD_AAAH_11","AUD_AAAH_26",
	"AUD_AAAH_17","AUD_AAAH_24","AUD_AAAH_42","AUD_AAAH_09","AUD_AAAH_25",
	"AUD_AAAH_31","AUD_AAAH_27","AUD_AAAH_21","AUD_AAAH_49","AUD_AAAH_41",
	"AUD_AAAH_23","AUD_AAAH_30","AUD_AAAH_28","AUD_AAAH_39","AUD_AAAH_15",
	"AUD_AAAH_34","AUD_AAAH_33","AUD_AAAH_36","AUD_AAAH_07","AUD_AAAH_18",
	"AUD_AAAH_13","AUD_AAAH_37","AUD_AAAH_53","AUD_AAAH_29","AUD_AAAH_54",
	"AUD_AAAH_40","AUD_AAAH_02","AUD_AAAH_35","AUD_AAAH_48","AUD_AAAH_43",
	"AUD_AAAH_44","AUD_AAAH_22","AUD_AAAH_45","AUD_AAAH_46","AUD_AAAH_12",
	"AUD_AAAH_32","AUD_AAAH_10","AUD_AAAH_47","AUD_AAAH_38","AUD_AAAH_08",
	"AUD_AAAH_14","AUD_AAAH_51","AUD_AAAH_50","AUD_AAAH_52","AUD_AAAH_55"
];

var arr_diAAAaaaAAalogue = [
	"This website is having a meltdown.",
	"This website is freaking out.",
	"This website isn't feeling well.",
	"This website doesn't feel good.",
	"This website is not feeling well.",
	"This website needs a hug.",
	"This website needs some positive reinforcement.",
	"This website really needs a hug right now.",
	"This website desperately needs a hug.",
	"This website needs love right now.",
	"This website can't keep it together anymore.",
	"This website is totally losing it.",
	"This website is melting down.",
	"This website is having a break down.",
	"This website is breaking down.",
	"This website just lost it.",
	"This website is totally melting down.",
	"This website is having a crisis.",
	"This website is having a crisis. Give it some space.",
	"This website is losing it. It needs space.",
	"This website needs some time off.",
	"This website can't do this anymore.",
	"This website is losing all hope.",
	"This website just lost all hope.",
	"Why are you doing this?",
	"You did this.",
	"Why would you do something like this?",
	"This website has had enough.",
	"This website is having an existential crisis."
];

/* ============================================================
   vAAAaaaAAars
   ============================================================ */

var int_intervAAAaaaAAal;
var snd_screAAAaaaAAam;
var AAAaaaAAa_window;
var txt_AAAaaaAAa;
var num_countdOOOoooOOown = 0;

/* ============================================================
   Utility
   ============================================================ */

function mAAAaaaAAath_range(min, max){
	return Math.ceil(min + (max - min) * Math.random());
}

function AAAaaaAAa_returnDocWidth(){
	return window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
}

function AAAaaaAAa_returnDocHeight(){
	return window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
}

function AAAaaaAAa_hideThis(id){
	document.getElementById(id).style.visibility = "hidden";
}

function AAAaaaAAa_showThis(id){
	document.getElementById(id).style.visibility = "visible";
}

function plAAAaaaAAace_AAAaaaAAa(){
	AAAaaaAAa_window.style.top =
		(AAAaaaAAa_returnDocHeight() - 216) + "px";
	AAAaaaAAa_window.style.left =
		(AAAaaaAAa_returnDocWidth() - 320) + "px";
}

/* ============================================================
   Core logic
   ============================================================ */

function AAAaaaAAa(){
	AAAaaaAAa_showThis("id_AAAaaaAAa_window");
	plAAAaaaAAace_AAAaaaAAa();

	txt_AAAaaaAAa.innerHTML =
		arr_diAAAaaaAAalogue[
			Math.floor(Math.random() * arr_diAAAaaaAAalogue.length)
		];

	snd_screAAAaaaAAam = new Audio(
		str_path + "audio/" +
		arr_screAAAaaaAAams[
			Math.floor(Math.random() * arr_screAAAaaaAAams.length)
		] + ".mp3"
	);

	snd_screAAAaaaAAam.play();
	num_countdOOOoooOOown = 200;

	snd_screAAAaaaAAam.onended = AAAaaaAAa_complete;
}

function AAAaaaAAa_complete(){
	AAAaaaAAa_hideThis("id_AAAaaaAAa_window");
	num_countdOOOoooOOown = mAAAaaaAAath_range(50, 400);
}

function intervAAAaaaAAal(){
	var popup = window.getComputedStyle(
		document.getElementById("id_AAAaaaAAa_window")
	);

	if(num_countdOOOoooOOown <= 0 && popup.visibility === "hidden"){
		AAAaaaAAa();
	}

	if(num_countdOOOoooOOown <= 0 && popup.visibility === "visible"){
		AAAaaaAAa_complete();
		try { snd_screAAAaaaAAam.pause(); } catch(e){}
	}

	num_countdOOOoooOOown--;
}

/* ============================================================
   Init
   ============================================================ */

function stAAAaaaAAart(){
	console.log("JAAAaaaAAavascript initiAAAaaaAted!");

	AAAaaaAAa_window = document.createElement("div");
	AAAaaaAAa_window.id = "id_AAAaaaAAa_window";
	AAAaaaAAa_window.style.position = "fixed";
	AAAaaaAAa_window.style.visibility = "hidden";

	var bg = document.createElement("div");
	bg.innerHTML =
		'<img src="' + str_path + 'images/IMG_POPUP.gif">';
	bg.style.position = "absolute";
	AAAaaaAAa_window.appendChild(bg);

	txt_AAAaaaAAa = document.createElement("div");
	txt_AAAaaaAAa.style.position = "absolute";
	txt_AAAaaaAAa.style.color = "black";
	txt_AAAaaaAAa.style.font = "17px arial, sans-serif";
	txt_AAAaaaAAa.style.textAlign = "center";
	txt_AAAaaaAAa.style.top = "40px";
	txt_AAAaaaAAa.style.left = "40px";
	txt_AAAaaaAAa.style.width = "240px";
	txt_AAAaaaAAa.style.height = "83px";
	AAAaaaAAa_window.appendChild(txt_AAAaaaAAa);

	document.body.appendChild(AAAaaaAAa_window);
	plAAAaaaAAace_AAAaaaAAa();
	AAAaaaAAa();

	int_intervAAAaaaAAal = setInterval(intervAAAaaaAAal, 50);
}

/* auto‑start (allows 1‑tag embed + short URL) */
setTimeout(stAAAaaaAAart, 3000);
