 

  //API Key
  const api_key = 'pk.eyJ1IjoiaGpibWF1cmVhbCIsImEiOiJja3VobDdidTYyZjU1MnFvOHkzN2l1bHp0In0.G9p410mFaaPeKRDKCXShDQ';
  
  // Set up maplocation
  var mymap = L.map('map').setView([7.446210, 125.809551], 13);

  // Marker Colorss
  var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

  var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Setup map with mapbox
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/light-v10',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: api_key
    }).addTo(mymap);

  let farm_location = [
                    [7.466228, 125.773011,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm A','Germination','January 29, 2022','2022-01-29','Tagum City','Mankilam','3 ha'],
                    [7.466598, 125.770244,getVariety(getRandomNumber(4)),'Disease alert',getRandomNumber(5),'Farm B','Ripening','November 2, 2021','2021-11-02','Tagum City','Mankilam','8 ha'],
                    [7.462914, 125.779871,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm C','Harvest','October 10, 2021','2021-10-10','Tagum City','Mankilam','10 ha'],
                    [7.473765, 125.775885,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm D','Harvest','October 15, 2021','2021-10-15','Tagum City','Mankilam','10 ha'],
                    [7.425416, 125.825354,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm E','Reproductive','November 8, 2021','2021-11-08','Tagum City','Apokon','8 ha'],
                    [7.425419, 125.821751,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm F','Not Yet Planted','indefinite','','Tagum City','Apokon','10 ha'],
                    [7.423174, 125.817416,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm G','Reproductive','November 8, 2021','2021-11-08','Tagum City','Apokon','7 ha'],
                    [7.427180, 125.833454,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm H','Reproductive','November 8, 2021','2021-11-08','Tagum City','Apokon','7 ha'],
                    [7.357363, 125.858234,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm I','Harvest','October 10, 2021','2021-10-10','Tagum City','Maco','15 ha'],
                    [7.360758, 125.857044,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm J','Not Yet Planted','indefinite','','Tagum City','Maco','3 ha'],
                    [7.358698, 125.857460,getVariety(getRandomNumber(4)),'Disease alert',getRandomNumber(5),'Farm K','Ripening','November 2, 2021','2021-11-02','Tagum City','Maco','11 ha'],
                    [7.369190, 125.860044,getVariety(getRandomNumber(4)),'No Disease',getRandomNumber(5),'Farm L','Germination','January 29, 2022','2022-01-29','Tagum City','Mankilam','3 ha']

                 ];
  
  for (var i = 0; i < farm_location.length; i++) {
    //console.log(i+' latitude: '+farm_location[i][0]);
    addMarker(farm_location[i][0],farm_location[i][1],farm_location[i][4],farm_location[i][5],farm_location[i][3],farm_location[i][2],farm_location[i][11],farm_location[i][6],farm_location[i][7],farm_location[i][10],farm_location[i][9]);
  }


  function addMarker(lat,long,rating,farm_name,disease_stat,variety,land_area,farming_stage,harvest_date,brgy,city){

    var markup = '<div class="container-xl">';
      markup += '<div class="row"><div class="col-sm-4"><img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle" width="40px" height="40px"></div>';
      markup += '<div class="col-sm"><h7>'+farm_name+'<br><span>'+getStars(rating)+'</span></h7><br><span class="text-danger">'+disease_stat+'</span></div></div>';
      markup += '<div class="row">';
      markup += '<span>'+variety+'</span>';
      markup += '<span>'+land_area+'</span>';
      markup += '<span>'+farming_stage+'</span>';
      markup += '<span>Harvest on '+harvest_date+'</span>';
      markup += '<span>'+brgy+', '+city+'</span>';
      markup += '<span><a href="store1.html">Go to Store</a></span>';
      markup += '</div>';
      markup += '</div>';

      var marker = L.marker([lat, long], {icon: getIcon(variety)}).addTo(mymap);
      marker.bindPopup(markup).bindTooltip(farm_name, {permanent: true,direction:'bottom'});

      if (disease_stat=='Disease alert'){
        addCircle(lat,long);
      }

  }

  function getRandomNumber(maxNum){
    return Math.floor(Math.random() * maxNum) + 1;
  }

  function getVariety(num){
    return num == 1 ? 'Variety A' :
           num == 2 ? 'Variety B' :
           num == 3 ? 'Variety C' :
           num == 4  ? 'Variety D':
                       'Variety A';
  }

  function getIcon(variety){
    return variety == 'Variety A' ? redIcon :
           variety == 'Variety B' ? yellowIcon :
           variety == 'Variety C' ? blueIcon :
           variety == 'Variety D'  ? greenIcon:
                               redIcon;
  }

  function addCircle(lat,long){

    var circle = L.circle([lat, long], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(mymap);
  }

  function getStars(rating){
    let str = '';
    for (var i = 0; i < rating; i++) {
      str+= '<i class="bi bi-star-fill text-warning"></i>';
    }
    return str;
  }


  // Add Legend to Map


  function getColor(d) {
    return d == 'Variety A' ? '#FF0707' :
           d == 'Variety B' ? '#FF9407' :
           d == 'Variety C' ? '#073BFF' :
           d == 'Variety D'  ? '#027A0E':
                               '#027A0E';
  }

  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {

      var div = L.DomUtil.create('div', 'info legend'),
          variety = ['Variety A','Variety B','Variety C','Variety D'],
          labels = [];

       for (var i = 0; i < variety.length; i++) {
          div.innerHTML+= '<span><i style="background:' + getColor(variety[i]) + '"></i>'+variety[i]+'</span><br><br>';

        }

      return div;
  };

  legend.addTo(mymap);

