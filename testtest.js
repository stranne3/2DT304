import fetch from 'node-fetch'

fetch("https://eu1.cloud.thethings.network/api/v3/as/applications/esp32counterfinal/devices/eui-70b3d57ed004c890/packages/storage/uplink_message", {
    method: "GET",
    headers: {
        'Authorization' : "Bearer NNSXS.27TPAT5ESMNGWEGOZUGPGCTZLK6AIV3JQB24FWY.RZ3MTBC3BD6W3IOFLJLT5WRVQIDFNX6A4E7JGAQOIRXFB5ABSCRQ",
        'Accept' : 'application/json'
    }
})
.then(response =>{

    if(!response.ok){
        throw new Error(`Request failed with status ${response.status}`)
    }

    return response.text()
})
.then(data =>{
    var stringObjects = data.split("\n") // En array som innehåller varje result som en sträng
    // En for-loop som loopar igenom arrayen och converterar varje stäng till ett objekt.
    // Detta gör att varje result blir JSON --> vi kan hämta ut data!
    for(var i = 0; i < stringObjects.length; i++) {
        var objObjects = JSON.parse(stringObjects[i])
        console.log(objObjects)
    }

})
.catch(error => console.log("\n \n \n \n ", error))
