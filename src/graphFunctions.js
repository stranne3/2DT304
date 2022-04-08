async function gettingHere() {
  var a = await getDataFromFirebase().then(data => {
    return data
  })

  return a
}

async function getDataFromFirebase(){
    const firebaseConfig = {
      apiKey: "AIzaSyB0ACKYz6CovM3yRIgoonh-3iztDq3gFRg",
      authDomain: "paxcounter-7b526.firebaseapp.com",
      projectId: "paxcounter-7b526",
      storageBucket: "paxcounter-7b526.appspot.com",
      messagingSenderId: "38327586179",
      appId: "1:38327586179:web:95b407d47ea9514e16bab6",
      measurementId: "G-N4FWD59FRY"
    };

    var firebaseApp;
    (async () => {
      firebaseApp = await import('firebase/app');
      const app = firebaseApp.initializeApp(firebaseConfig);
    })();

    var a = (async () => {
      let firebaseDatabase = await import('firebase/database');
      const db = firebaseDatabase.getDatabase();

      var d = await firebaseDatabase.get(firebaseDatabase.ref(db)).then((snapshot) => {
        return snapshot.val()
      });
      
      var keys = Object.keys(d)
      var arrayWithDateAndHour = getArrayOfTime(keys, d)
      hoursAndValues = getDatesWithHourAndValues(arrayWithDateAndHour, d)
      return hoursAndValues
    })();
    return await a
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

function getDayData(data){
  var newLastDateData = {}
  var dates = Object.keys(data)
  var lastDate = dates[dates.length -1]
  var lastDateData = data[lastDate]
  var lastDateHours = Object.keys(lastDateData)
  newLastDateData[lastDate] = {}
  for(var i = 0; i < lastDateHours.length; i++) {
    var temp = {}
    temp[lastDateHours[i]] = Math.max(...lastDateData[lastDateHours[i]])
    newLastDateData[lastDate][lastDateHours[i]] = Math.max(...lastDateData[lastDateHours[i]])
  }
  return newLastDateData
}

function getWeekData(data) {
  var dates = Object.keys(data)
  if(dates.length >= 7){ //if we have more than 7 dates
    dates = dates.slice(dates.length -7)
  }
  var holdTemp = {}
  for(var i = 0; i < dates.length; i++){
    var hold = []
    var hours = Object.keys(data[dates[i]])
    for(var j = 0; j < hours.length; j++){
      temp = {}
      temp[hours[j]] = Math.max(...data[dates[i]][hours[j]])
      hold.push(temp)
    }
    holdTemp[dates[i]] = hold
  }
  var maxAtDate = {}
  for(var i = 0; i < dates.length; i++) {
    hours = holdTemp[dates[i]].length
    console.log(holdTemp[dates[i]])
    var tempMax = 0
    for(var j = 0; j < hours; j++){
      var time = Object.keys(holdTemp[dates[i]][j])
      var val = holdTemp[dates[i]][j][time]
      if(val > tempMax) {
        temp = [] //reset temp
        tempMax = val;
      }
    }
    maxAtDate[dates[i]] = tempMax
  }
  return maxAtDate
}

module.exports = {
  gettingHere,
  getDayData,
  getWeekData
}