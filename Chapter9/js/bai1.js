var array = [
  {
    name: "duy tan",
    address: "A",
    vitri: {
        lat: 16.05996541278714,
        lng: 108.20973148244958
    }

  },
  {
    name: "hoan my",
    address: "B",
    vitri: {
        lat: 16.059574188165676,
        lng: 108.20979057946097
    }

  },
  {
    name: "my cay",
    address: "B",
    vitri: {
        lat: 16.059473226848212,
        lng: 108.20889755795565
    }

  }

]

var position
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(succes, erros)
}

function succes(pos){
    console.log(pos);
    position = pos
    // console.log(position.coords.latitude);

}

function erros(e){
    console.error(e)
}

$(document).ready(function(){
    // $('button').click(function(){
    //     window.open("https://www.google.com/maps/@"+position.coords.latitude+','+position.coords.longitude)
    //     console.log(position.coords.latitude);
    // })

    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
    // console.log(array[1].name);
    // init(position.coords.latitude,position.coords.longitude)
})

function init(a,b) {
  // The location of Uluru 16.0738064,108.1477255
  const uluru = { lat: 16.05965447334152, lng: 108.21069814667422 };

//   var myCenter=new google.maps.LatLng(16.0738064, 108.1477255);
//   var myCity = new google.maps.Circle(document.getElementById("map"),{
//     center:uluru,
//     radius:40000,
//     strokeColor:"#0000FF",
//     strokeOpacity:0.8,
//     strokeWeight:2,
//     fillColor:"#0000FF",
//     fillOpacity:0.4,
//     zoom: 10
//   });
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });

//   for (const arr in array){
    const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: uluru,
        radius:500,
      });
//   }

  // The marker, positioned at Uluru
  for (const arr in array) {
    const marker = new google.maps.Marker({
        position: array[arr].vitri,
        map: map
      });
      var infowindow = new google.maps.InfoWindow({
        // nội dung của InfoWindow
        content: array[arr].name
        });

      infowindow.open(map,marker);
  }
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
//   var infowindow = new google.maps.InfoWindow({
//     // nội dung của InfoWindow
//     content:"Hello World!"
//     });

//   infowindow.open(map,marker);

}
