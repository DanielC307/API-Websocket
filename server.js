const Websocket = require('ws') // biblioteca ws
 
const wss = new Websocket.Server({port: 8080}); // Servidor declarado

console.log('O servidor de websocket esta executando a porta 8080...')

// Evento de conexão com o servidor

wss.on('connection', function(ws) {
  console.log('A COnexão foi bem sucedida!')

  // Evento de envio de mensagens para websocket

wss.on('message', function(data){
  const message = data.toString()
  console.log("Mensagem recebida", message)

  wss.clients.forEach(function(client) {
    if(client.readyState == Websocket.OPEN){
      client.send(message)
    }
  })
})
})

wss.on('close', () => {
  console.log("o cliente desconectou!.")
})