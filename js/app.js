var calculadora = {

	iniciar:function(){
		var tecla = document.getElementsByClassName("tecla");
		for(var i in tecla){
			tecla[i].onclick = this.asignarValor;
		}
	},
	asignarValor:function(sel){
		var tecla = sel.toElement.id;

		if (!isNaN(tecla)){
			console.log('aca');
			var num_ant = document.getElementById('display').innerHTML;
			num_ant = num_ant!='0' ? num_ant += tecla : tecla;
			calculadora.textoPantalla(num_ant);
		}

		switch (sel.toElement.id){
			case 'on':
				calculadora.textoPantalla('0');
				break;
			case 'punto':
				var num_ant = document.getElementById('display').innerHTML;
				if(!num_ant.includes(".")){
					num_ant += '.';
					calculadora.textoPantalla(num_ant);
				}
				break;
			case 'sign':
				var num_ant = document.getElementById('display').innerHTML;
				if(!num_ant.includes("-") && num_ant!='0'){
					num_ant = '-'+num_ant;
				}else{
					num_ant = num_ant.replace("-", "");
				}
				calculadora.textoPantalla(num_ant);
				break;
			case 'mas':
				break;
			case 'menos':
				break;
			case 'por':
				break;
			case 'dividor':
				break;
		}
	},
	textoPantalla:function(texto){
		if(texto.includes("-") && texto.length<10){
			document.getElementById('display').innerHTML=texto;
		}else if(texto.length<9){
			document.getElementById('display').innerHTML=texto;
		}
	},
	sumar:function(){

	},
	restar:function(){
		console.log('hola');
	},
	multiplicar:function(){
		
	},
	dividir:function(){
		
	}
};

calculadora.iniciar();

/*function muestraMensaje(sel){
	console.log(sel.toElement.id);
}

var x = document.getElementsByClassName("tecla");
x[0].onclick = muestraMensaje;

console.log(x);*/