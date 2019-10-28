require('dotenv').config()
const freeclimbSDK = require('@freeclimb/sdk')
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const freeclimb = freeclimbSDK(accountId, authToken)

const options = {
  alias: 'Tutorial Queue',
  maxSize: 25
}
//Invoke method to create a queue with the options provided
freeclimb.api.queues.create(options).then(queue => {
  // use created queue
  const queueId = queue.queueId
  freeclimb.api.queues.get(queueId).then(queue => {
    console.log(queue)
  })
}).catch(err => {
  // Catch Errors
})
