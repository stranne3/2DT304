var c = "{ \"05\" : { \"value\" : \"4\" }}"
var d = "{ \"06\" : { \"value\" : \"5\" }}"
var b = JSON.parse(c)
var e = JSON.parse(d)
var t = "05"
var a = []
a.push(b)
a.push(e)
var thisKey = Object.keys(b)
console.log("THIS KEY: ", thisKey)
//Denna mappar ut högsta, men endast om "key" = "05" är samma
var k = []
for(var i = 0; i < a.length; i++) {
    if(Object.keys(a[i])[0] == t){
        k.push(a[i])
    }
}

try{
    const h = Math.max.apply(Math, k.map(function(o) {
        if(o[thisKey].value !== undefined){
            return o[thisKey].value
        }
    }))
    console.log(h)
}catch(error) {
    console.log("Key is not the same")
}

