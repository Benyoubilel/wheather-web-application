fetch('https://api.geoapify.com/v1/ipinfo?apiKey=14b1331ba60f45888a50ba6f90d27ce1')
.then(resp => resp.json())
.then((userLocationData) => {
	console.log(userLocationData);

});

fetch('https://ipinfo.io/json?token=44f1aa2e06475c')
.then(res => res.json())
.then((data) => {
	console.log(data);
})




$(document).ready(function(){
	$.getJSON("https://ipinfo.io",function(data){
		console.log(data.ip);
	})
})