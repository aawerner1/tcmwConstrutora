function initMap() {
     var uluru = {lat: -26.3044, lng: -48.8464};
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 13,
       center: uluru
     });
     var marker = new google.maps.Marker({
       position: uluru,
       map: map
     });
   }
