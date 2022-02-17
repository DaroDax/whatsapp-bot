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
	const numbers = [
		"+584121686466",
		"+573138233886",
		"+584247407159",
		"+584163713041",
		"+584149719977",
		"+584247551339",
		"+573507331215",
		"+584247692879",
		"+584247432235",
		"+584149757837",
		"+573165431152",
		"+584147524892",
		"+584247109700",
		"+584247150979",
		"+584147225340",
		"+584140771309",
		"+584247216877",
		"+584247783288",
		"+584247564722",
		"+584247745910",
		"+584146476950",
		"+584147095845",
		"+584268281991",
		"+584145945210",
		"+584149762603",
		"+584263476805",
		"+573143952831",
		"+584166748874",
		"+584247668432",
		"+584147047636",
		"+584147274849",
		"+573503886470",
		"+584147213407",
		"+584247512574",
		"+584127503512",
		"+584143893913",
		"+584140770278",
		"+584165721100",
		"+584244444747",
		"+573507060051",
		"+584141759538",
		"+584247153457",
		"+573507036138",
		"+584247404527",
		"+584247804605",
		"+584247441972",
		"+584147243285",
		"+584147358101",
		"+584244344850",
		"+5 2767716233",
		"+584247403211",
		"+573219335402",
		"+584140769178",
		"+584147397255",
		"+584247670772",
		"+573124530069",
		"+584147515982",
		"+584247804605",
		"+573204485266",
		"+584242241799",
		"+584247364970",
		"+584247304652",
		"+584161141274",
		"+584247150979",
		"+573507047795",
		"+584166748874",
		"+584140750122",
		"+5 2121025792",
		"+584147243054",
		"+573154888668",
		"+584127508301",
		"+584163077002",
		"+584247567107",
		"+584147242344",
		"+584247348706",
		"+573016556472",
		"+584247234716",
		"+584165750103",
		"+584261782115",
		"+584247640961",
		"+584162728236",
		"+573016556472",
		"+584141771505",
		"+584166756251",
		"+584162736495",
		"+584263757601",
		"+584126597325",
		"+584147055612",
		"+584247276664",
		"+584247420960",
		"+573507412716",
		"+573182907048",
		"+573132296741",
		"+584247685733",
		"+584247072953",
		"+584143505511",
		"+573506130279",
		"+5 5731434151",
		"+573503910182",
		"+573158055384",
		"+573122982063",
		"+584149785608",
		"+584247278383",
		"+584247283041",
		"+584142623344",
		"+573197167364",
		"+584247150979",
		"+584247150979",
		"+573503726856",
		"+584147320508",
		"+584262749503"
	];
   
	 // Your message.
	const text = "Hola querido cliente, somos los asesores de venta de VNET y te vinimos a invitar en esta promoción a qué te unas a nuestro internet de más de 20MB \n\n Por solo 100$ de instalación te incluimos todo lo necesario: \n\n -Cable de fibra óptica \n -Onu Módem/Router \n -Primer mes \n\n Y si leíste bien, somos internet que cuenta con fibra óptica, no hay que usar antenas ni ningún otro dispositivo, solamente llevamos un cable hasta tu casa \n\n También en ese paquete incluimos 40 canales en HD de televisión que puedes ver con nuestro veloz servicio \n\n Y para finalizar nuestros planes son de\n\n 20 a 50mb = 30$\n 50 a 100mb =  50$\n 100 a 200mb = 90$\n\n Gracias por su atención, si estás interesado, responde este mensaje con tu dirección para poder confirmar nuestro servicio en tu zona, gracias";
   
	 // Getting chatId from the number.
	 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.

	for(let i = 0; i < numbers.length; i++){

		console.log(i);

		const chatId = numbers[i].substring(1) + "@c.us";
   
		// Sending message.
		client.sendMessage(chatId, text);
	}

	
   });

client.initialize();


