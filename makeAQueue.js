const persephonySDK = require('@persephony/sdk')
const accountId = process.env.accountId
const authToken = process.env.authToken
const persephony = persephonySDK(accountId, authToken)

const options = {
  alias: 'Tutorial Queue',
  maxSize: 25
}
//Invoke method to create a queue with the options provided
persephony.api.queues.create(options).then(queue => {
  // use created queue
  const queueId = queue.queueId
  persephony.api.queues.get(queueId).then(queue => {
    console.log(queue)
  })
}).catch(err => {
  // Catch Errors
})
