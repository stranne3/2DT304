function setUp(lat, long){
var m = "{ \"lat\": \""+ lat.toString() + "\", \"long\": \"" + long.toString()+ "\"}";
  var msg = JSON.parse(m)
  const firebaseConfig = {
    apiKey: "AIzaSyBReXdAg-leJH7k3gd5M8dHRxs_YqX-i7E",
    authDomain: "mapvalues-8c0ea.firebaseapp.com",
    projectId: "mapvalues-8c0ea",
    storageBucket: "mapvalues-8c0ea.appspot.com",
    messagingSenderId: "841595202659",
    appId: "1:841595202659:web:b7905b4a2370e702b71c56",
    measurementId: "G-1PFPE4T6J6"
  };

  var firebaseApp;
  (async () => {
    firebaseApp = await import('firebase/app');
    const app = firebaseApp.initializeApp(firebaseConfig)
  })();

  (async () => {
    let firebaseDatabase = await import('firebase/database');
    const db = firebaseDatabase.getDatabase()

    await firebaseDatabase.get(firebaseDatabase.ref(db)).then((snapshot) => {
      return snapshot.val()
    }).then(data => {
      if(data === null){
        firebaseDatabase.update(firebaseDatabase.ref(db), {"0": msg})
      } else {
        var keys = Object.keys(data)
        var nextKey = parseInt(keys[keys.length -1]) + 1;
        var newMsg = "{\""+ nextKey + "\" :" + m +"}" 
        jsonMsg = JSON.parse(newMsg) 
        firebaseDatabase.update(firebaseDatabase.ref(db), jsonMsg)
      }
    })
  })();
}

async function write(lat, long){
  console.log(lat)
  console.log(long)
  try {
    if((lat !== undefined || long !== undefined) || (lat !== "" || long !== "")){
      setUp(lat, long)
      return "Successfully stored your location!"
    } else {
      throw new Error
    }
  } catch(error) {
    return "Could not store your location, try again!"
  }
}

module.exports = {
  write
}