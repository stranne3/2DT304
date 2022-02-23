import fetch from 'node-fetch'
import {initializeApp} from 'firebase/app'
import { getDatabase, onDisconnect, push, ref, set, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB0ACKYz6CovM3yRIgoonh-3iztDq3gFRg",
    authDomain: "paxcounter-7b526.firebaseapp.com",
    projectId: "paxcounter-7b526",
    storageBucket: "paxcounter-7b526.appspot.com",
    messagingSenderId: "38327586179",
    appId: "1:38327586179:web:95b407d47ea9514e16bab6",
    measurementId: "G-N4FWD59FRY"
  }

const app = initializeApp(firebaseConfig)
const db = getDatabase();

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
    var stringObjects = data.split("\n")
    savePayloadAsJson(stringObjects) 
    var j = JSON.parse(stringObjects[0])
    console.log(j)
    console.log(j.result.uplink_message.decoded_payload)
})
.catch(error => console.log(error))

async function middleHand(date, message){
    var jsonMessage = JSON.parse(message)
    await writeData(date, jsonMessage)
}
async function writeData(date, jsonMessage) {

    update(ref(db, date), jsonMessage)
}

// En array som innehåller varje result som en sträng
// En for-loop som loopar igenom arrayen och converterar varje stäng till ett objekt.
// Detta gör att varje result blir JSON --> vi kan hämta ut data!
function savePayloadAsJson(stringObjects) {
    var payloadAsJson = []
    for(var i = 2; i < 10; i++) {
        try{
            var objObjects = JSON.parse(stringObjects[i])
            if(objObjects.result.uplink_message.decoded_payload !== undefined) {
                var paxCount = objObjects.result.uplink_message.decoded_payload.pax

                var paxDateAndTime = (objObjects.result.uplink_message.settings.time).split("T")
                var date = paxDateAndTime[0]
                var t = paxDateAndTime[1]
                t = t.slice(0, 5)
               
                var m = "{ \"" + t.toSting() + "\" : {\"value\" : "+ paxCount +" }}"
                payloadAsJson.push(JSON.parse(m))

                break

                //middleHand(date, m)

                //middleHand(date.toString(), time.toString(), paxCount.toString()) //Här måste vi ändra så att vi skriver in paxcounterns värde.
            }
        }catch(error) {
            
        }
    }

    console.log(payloadAsJson)
}