const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	console.log(message.body);
});

client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});

client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
});

//Enviar mensajes a numeros 
client.on('ready', () => {
	console.log('Client is ready!');
   
	 // Number where you want to send the message.
	const number = "+573506122944";
   
	 // Your message.
	const text = "Hey john";
   
	 // Getting chatId from the number.
	 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
	const chatId = number.substring(1) + "@c.us";
   
	// Sending message.
	client.sendMessage(chatId, text);
   });

client.initialize();