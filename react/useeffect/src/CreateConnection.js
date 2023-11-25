
export function CreateConnetion(serverUrl,roomId) {
  return {
    connect(){
        console.log("Connected to "+ roomId + " at " + serverUrl)
    },
    disconnect(){
        console.log("Disconnected from "+ roomId + " at" + serverUrl)
    }
  }
}

