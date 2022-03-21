var counter = 0;
function setUp(long, lat){
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
    console.log("i database")
  })();

  (async () => {
    let firebaseDatabase = await import('firebase/database');
    const db = firebaseDatabase.getDatabase()
    console.log("i firebase")

    await firebaseDatabase.get(firebaseDatabase.ref(db)).then((snapshot) => {
      return snapshot.val()
    }).then(data => {
      if(data === null){
        firebaseDatabase.update(firebaseDatabase.ref(db), {"0": msg})
      } else {
        var keys = Object.keys(data)
        var lastKey = parseInt(keys[keys.length -1])
        var nextKey = lastKey + 1
        var newMsg = "{\""+ nextKey + "\" :" + m +"}" 
        jsonMsg = JSON.parse(newMsg) 
        firebaseDatabase.update(firebaseDatabase.ref(db), jsonMsg)
      }
    })

    //firebaseDatabase.update(firebaseDatabase.ref(db), msg)
  })();
}

async function write(long, lat){
  console.log("TYP: ", typeof(long))
  try {
    setUp(long, lat)
    counter += 1;
  } catch(error) {
    console.log("Något gick fel")
    console.log(error)
  }
}

module.exports = {
  write
}