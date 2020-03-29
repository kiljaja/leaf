// List of centers where homeless people are provided with hot meals, showers, medical help and a place to sleep
async function getDropInCenters(){
  let url = 'https://data.cityofnewyork.us/resource/bmxf-3rd4.json';
  return await getNYCDataSet(url);
}

// Locations where NYC residents can drop off their food scraps to be composted. 
async function getFoodScrapDropOff(){
  let url = 'https://data.cityofnewyork.us/resource/if26-z6xq.json';
  return await getNYCDataSet(url);
}

// Fetch an NYC data set and parse it
async function getNYCDataSet( url){
  let response = await fetch('https://data.cityofnewyork.us/resource/bmxf-3rd4.json');
  let data = await response.json();
  let parsedData = data.map( center => parseCenters(center))
  return parsedData;
}

// Parse center for only relevent data
function parseCenters( center ){
  return{
      name: center.center_name,
      latitude: center.latitude,
      longitude: center.longitude
  }
}


export {getDropInCenters, getFoodScrapDropOff};