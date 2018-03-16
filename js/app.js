var calculadora = {
	num_uno:0,
	num_dos:0,
	num_dos_total:0,
	total:0,
	operador:'',
	operador_total:'',
	iniciar:function(){
		var tecla = document.getElementsByClassName("tecla");
		for(var i in tecla){
			tecla[i].onclick = this.asignarValor;
			tecla[i].onmousedown = this.presionar;
		}
	},
	presionar:function(sel){

		console.log(sel.toElement);
		sel.toElement.style='transform: scale(0.9);';
	},
	asignarValor:function(sel){
		var tecla = sel.toElement.id;
		console.log(sel.toElement);
		sel.toElement.style='transform: ;';
		//sel.transform.scale='(0.8)';
		//
		console.log(tecla);
		if (!isNaN(tecla)){
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
				calculadora.sumar();
				break;
			case 'menos':
				calculadora.restar();
				break;
			case 'por':
				calculadora.multiplicar();
				break;
			case 'dividido':
				calculadora.dividir();
				break;
			case 'igual':
					var total = calculadora.operar();
					calculadora.textoPantalla(total);
					calculadora.operador='';
				break;
		}
	},
	textoPantalla:function(texto){
		if(texto.includes("-")){
			// && texto.length<10
			texto = texto.substr(0,9);
			document.getElementById('display').innerHTML=texto;
		}else{
			// if(texto.length<9)
			texto = texto.substr(0,8);
			document.getElementById('display').innerHTML=texto;
		}
	},
	sumar:function(){
		if(calculadora.operador==''){
			calculadora.operador='+';
			calculadora.num_uno = parseFloat(document.getElementById('display').innerHTML);
			calculadora.textoPantalla('');
		}
		calculadora.num_dos_total = '';
		calculadora.operador_total = '';
	},
	restar:function(){
		if(calculadora.operador==''){
			calculadora.operador='-';
			calculadora.num_uno = parseFloat(document.getElementById('display').innerHTML);
			calculadora.textoPantalla('');
		}
		calculadora.num_dos_total = '';
		calculadora.operador_total = '';
	},
	multiplicar:function(){
		if(calculadora.operador==''){
			calculadora.operador='*';
			calculadora.num_uno = parseFloat(document.getElementById('display').innerHTML);
			calculadora.textoPantalla('');
		}
		calculadora.num_dos_total = '';
		calculadora.operador_total = '';
	},
	dividir:function(){
		if(calculadora.operador==''){
			calculadora.operador='/';
			calculadora.num_uno = parseFloat(document.getElementById('display').innerHTML);
			calculadora.textoPantalla('');
		}
		calculadora.num_dos_total = '';
		calculadora.operador_total = '';
	},
	operar:function(){
		calculadora.num_dos = parseFloat(document.getElementById('display').innerHTML);

		if(calculadora.operador_total==''){
			calculadora.num_dos_total = calculadora.num_dos;
			calculadora.operador_total = calculadora.operador;
			switch (calculadora.operador) {
				case '-':
					calculadora.total = calculadora.num_uno - calculadora.num_dos;
					break;
				case '+':
					calculadora.total = calculadora.num_uno + calculadora.num_dos;
					break;
				case '*':
					calculadora.total = calculadora.num_uno * calculadora.num_dos;
					break;
				case '/':
					calculadora.total = calculadora.num_uno / calculadora.num_dos;
					break;
			}
		}else{
			//calculadora.operador=calculadora.operador_total;
			switch (calculadora.operador_total) {
				case '-':
					calculadora.total = calculadora.total - calculadora.num_dos_total;
					break;
				case '+':
					calculadora.total = calculadora.total + calculadora.num_dos_total;
					break;
				case '*':
					calculadora.total = calculadora.total * calculadora.num_dos_total;
					break;
				case '/':
					calculadora.total = calculadora.total / calculadora.num_dos_total;
					break;
			}
		}
		var total = calculadora.total.toString();

		return total;
	}
};

calculadora.iniciar();

/*function muestraMensaje(sel){
	console.log(sel.toElement.id);
}

var x = document.getElementsByClassName("tecla");
x[0].onclick = muestraMensaje;

console.log(x);*/