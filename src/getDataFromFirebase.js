import fetch from 'node-fetch'
import {initializeApp} from 'firebase/app'
import { child, get, getDatabase, onDisconnect, orderByKey, push, ref, set, update} from "firebase/database";

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

getData()

function getData(){
    get(ref(db)).then((snapshot) => {
      return snapshot.val()
    }).then(data => {
      var keys = Object.keys(data)
      var arrayWithDateAndHour = getArrayOfTime(keys, data)
      var hoursAndValues = getDatesWithHourAndValues(arrayWithDateAndHour, data) //HÄR ÄR ALL SORTERAD DATA
      console.log(hoursAndValues)
    })
}

function getDatesWithHourAndValues(arrayWithDateAndHour, data){
  var dates = Object.keys(arrayWithDateAndHour)
  for(var i = 0; i < dates.length; i++){
    var dataInDate = data[dates[i]]
    var timeStampInDate = Object.keys(dataInDate)
    for(var j = 0; j < timeStampInDate.length; j++){
      arrayWithDateAndHour[dates[i]][timeStampInDate[j].slice(0,2)].push(dataInDate[timeStampInDate[j]].value)
    }
  }
  return arrayWithDateAndHour
}

function getArrayOfTime(keys, dataObject){
  var temp = {}
  for(var i = 0; i < keys.length; i++){
    var t = {}
    var a = []
    var dataInDate = dataObject[keys[i]]
    var timeStampInData = Object.keys(dataInDate)
    for(var j = 0; j < timeStampInData.length; j++) {
      if(!a.includes(timeStampInData[j].slice(0,2))){
        t[timeStampInData[j].slice(0,2)] = []
        a.push(timeStampInData[j].slice(0,2))
      }
    }
    temp[keys[i]] = t
  }
  return temp
}