import { createRequire } from "module";
const require = createRequire(import.meta.url)

const mqtt = require('mqtt')
const require = createRequire(import.meta.url);
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
const connectUrl = `eu1.cloud.thethings.network:1883`

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'esp32counterfinal@ttn',
  password: 'NNSXS.WPNUE2W46DGYQHPN54TGNISAUWKC2ZJ2QP4J62I.6GTA4ITNYBBSTASDNHM6BO33I4OA4MK5MZGO7I3DOIO6V32HKG3Q',
  reconnectPeriod: 1000,
})

const topic = '/nodejs/mqtt'
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
})

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
  })
  
client.on('connect', () => {
  client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
   if (error) {
        console.error(error)
    }
    })
})
    