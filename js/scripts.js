//alert("Hello, Javascript");
/*if(confirm("Are you sure you want to delete this record?")){
	alert("Record is delete.");
}else{
	alert("You pressed cancel button.");
}*/
function onClickCall(){
	//alert("Hi");
	//document.body.style.background = "green";
	document.body.className = "bodyGreen";
}

setInterval(function(){
	//document.getElementById("div1").className = document.getElementById("div1").className == "div-style" ? "div-style2" : "div-style";
	if(document.getElementById("div1").className == "div-style"){
		document.getElementById("div1").className =  "div-style2";
	}else{
		document.getElementById("div1").className =  "div-style";
	}
}, 200);