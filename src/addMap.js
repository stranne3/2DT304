async function gettingHere() {
    var a = await getLocationsFromFirebase().then(data => {
        return data
    })

    return a
}

async function getLocationsFromFirebase(){
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
    var a = (async () => {
        let firebaseDatabase = await import('firebase/database');
        const db = firebaseDatabase.getDatabase()
    
        var d = await firebaseDatabase.get(firebaseDatabase.ref(db)).then((snapshot) => {
          return snapshot.val()
        });

        return d
    })();

    return await a
}

module.exports = {
    gettingHere
}