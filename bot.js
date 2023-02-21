const qrcode = require('qrcode-terminal');
const { Client, Buttons, LocalAuth } = require('whatsapp-web.js');
// Guarda la session para no volver a pedir el QR
const client = new Client({
    authStrategy: new LocalAuth({ clientId: "1" })
});
//Inicia el cliente 
client.initialize();
//Si no esta logeado manda a imprimir el QR
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
//Ejecuta una funcion una vez este logeado 
client.on('authenticated', (session) => {  
	console.log('Autenticado Correctamente');
});
//Manda un error si la autenticación no funciono
client.on('auth_failure', msg => {
    console.error('No se pudo autenticar. ', msg);
});
//Manda una alerta de desconexion del cliente
client.on('disconnected', (reason) => {
    console.log('El cliente se desconecto ', reason);
});
//Si llega un mensaje lo muestra en el terminal 
client.on('message', message => {
	console.log(message.body);
});
   
client.on('message', async (message) => {
    if (message.body === '!ping'){
		message.reply('pong');
	}
	if(message.body === '!test') {
		message.reply('Thanks for sending a test message!');
	}
	if(message.body === '!help') {
		message.reply('Comandos disponibles:\n !ping \n !test \n !buttons');
	}

	if(message.body === '!buttons'){
		let button = new Buttons('Botones de prueba',[{body:'bt1'},{body:'bt2'},{body:'bt3'}],'Titulo','Pie');
		client.sendMessage(message.from, button);
	}
});

//Enviar mensajes a numeros 
client.on('ready', () => {   
	const chatId = '+573027490686'.substring(1) + "@c.us";
	const text = "Prueba mensaje";
	// Sending message.
	client.sendMessage(chatId, text);	
});




