require('dotenv').config()
const freeclimbSDK = require('@freeclimb/sdk')

const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const freeclimbConfig = new freeclimbSDK.createConfiguration({ accountId, apiKey })
const apiInstance = new freeclimbSDK.DefaultApi(freeclimbConfig)

//Invoke method to create a queue with the options provided
apiInstance.createAQueue({
  alias: 'Tutorial Queue',
  maxSize: 25
}).then(({ queueId }) => {
  // Get the queue and log details
  apiInstance.getAQueue(queueId).then((queue) => console.log(queue))
}).catch(console.log)

