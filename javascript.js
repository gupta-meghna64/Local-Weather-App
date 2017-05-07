var apikey = "3f10c0bf4b09abb604e9b55e54d8b00b";
var imageArray = ["http://openweathermap.org/img/w/01d.png", "http://openweathermap.org/img/w/02d.png", "http://openweathermap.org/img/w/03d.png", "http://openweathermap.org/img/w/04d.png", "http://openweathermap.org/img/w/05d.png", "http://openweathermap.org/img/w/06d.png", "http://openweathermap.org/img/w/07d.png", "http://openweathermap.org/img/w/08d.png", "http://openweathermap.org/img/w/09d.png", "http://openweathermap.org/img/w/10d.png", "http://openweathermap.org/img/w/11d.png", "http://openweathermap.org/img/w/12d.png", "http://openweathermap.org/img/w/13d.png", "http://openweathermap.org/img/w/50n.png"];
// imageArray[0] = new Image();
// imageArray[0].src = "windy.png"


var x = document.getElementById("demo");
var lati;
var long;
var area;
var descrip;
var tempe;
var requestdata;
var cels;
var far;
var res;
$('img').hide();
var loc_dis = document.getElementById("loc_display");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 

    lati = position.coords.latitude;
    long = position.coords.longitude;

}

// var skycons = new Skycons({"color": "#FFFAFF"});

// skycons.add("animated-icon", Skycons.CLEAR_DAY);

// skycons.play();

$('#Save').click(function() {
	/* Act on the event */
	requestdata = 'lat='+lati+'&lon='+long+'&appid='+apikey;
	var resultElement = $('#test');
	console.log(requestdata);
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather',
		method: 'get',
		data: requestdata,
		dataType: 'json',
		success: function(data){
		resultElement.html("Weather : " + data.weather[0].description + " Temperature : " + data.main.temp + " Area : " + data.name);
		descrip =data.weather[0].description;
		temp = data.main.temp;
		area = data.main;
		loc_dis.innerHTML = data.name;
		$('img').show();
		//document.getElementById("animated-icon").src = imageArray[0];
		//console.log(descrip);
		if(descrip == "clear sky")
			document.getElementById("animated-icon").src = imageArray[0];
		else if(descrip == "few clouds")
			document.getElementById("animated-icon").src = imageArray[1];
		else if(descrip == "scattered clouds")
			document.getElementById("animated-icon").src = imageArray[2];
		else if(descrip == "broken clouds")
			document.getElementById("animated-icon").src = imageArray[3];
		else if(descrip == "shower rain")
			document.getElementById("animated-icon").src = imageArray[8];
		else if(descrip == "rain")
			document.getElementById("animated-icon").src = imageArray[9];
		else if(descrip == "thunderstorm")
			document.getElementById("animated-icon").src = imageArray[10];
		else if(descrip == "snow")
			document.getElementById("animated-icon").src = imageArray[12];
		else
			document.getElementById("animated-icon").src = imageArray[13];

		cels = parseInt(temp);
		res = cels-273;

		document.getElementById("disptemp").innerHTML = "Temperature is : " + res + " Celsius";
		document.getElementById("dispdesc").innerHTML = "Description : " + descrip;

		



		}
		});
	});

function getCels() {
			document.getElementById("disptemp").innerHTML = "Temperature is : " + res + " Celsius";
		}

function getFar() {
			far = (9*res)/5+32;
			document.getElementById("disptemp").innerHTML = "Temperature is : " + far + " Farhenheit";
}
