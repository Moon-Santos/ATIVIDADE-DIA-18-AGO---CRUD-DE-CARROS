// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:

// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática

// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

// 6- Sair do sistema

const carros = [];
let continuar = true;

do {
	const pergunta = parseInt(
		prompt(
			` Bem vindo ao sistema de CRUD de veículos: \n No momento o sistema tem ${carros.length} carros cadastrados \n Escolha uma das opções para interagir com o sistema: \n 
                1-Cadastrar veículo \n 
                2-Listar todos os veículos \n 
                3-Filtrar veículos por marca \n
                4-Atualizar veículo \n
                5-Remover veículo \n
                6-Sair do sistema `
		)
	);

	switch (pergunta) {
		case 1:
			cadastrarVeiculo();
			break;
		case 2:
			listarVeiculos();
			break;
		case 3:
			filtrarVeiculosMarca();
			break;
		case 4:
			atualizarVeiculos();
			break;
		case 5:
			removerVeiculo();
			break;
		case 6:
			continuar = false;
			break;
		default:
			break;
	}
} while (continuar === true);

function cadastrarVeiculo() {
	const modelo = prompt('Digite o modelo do carro:');
	const marca = prompt('Digite a marca do carro:');
	const ano = parseInt(prompt('Digite o ano do carro:'));
	const cor = prompt('Digite a cor do carro:');
	const preco = parseFloat(prompt('Digite o preço do carro:'));

	if (!modelo || !marca || !ano || !cor || !preco) {
		alert('Digite todos os campos!');
		cadastrarVeiculo();
		return;
	}
	veiculo = {
		identificador: carros.length + 1,
		modelo,
		marca,
		ano,
		cor,
		preco,
	};

	carros.push(veiculo);
	alert('Veículo cadastrado com sucesso!');
}

function listarVeiculos() {
	for (let index = 0; index < carros.length; index++) {
		console.log(
			`ID: ${carros[index].identificador} | Modelo: ${carros[index].modelo} | Marca: ${carros[index].marca} | Ano: ${carros[index].ano} | Cor: ${carros[index].cor} | Preço: R$${carros[index].preco}`
		);
	}
}

function filtrarVeiculosMarca() {
	const marcaData = prompt('Digite a marca que deseja filtrar');
	const carrosFiltrados = carros.filter((carro) =>
		carro.marca.includes(marcaData)
	);
	carrosFiltrados.forEach((carro) => {
		console.log(
			`ID: ${carro.identificador} | Modelo: ${carro.modelo} | 
			Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preço: R$${carro.preco}`
		);
	});
}

function atualizarVeiculos() {
	const id = parseInt(prompt('Digite o ID do carro para ser atualizado'));
	const carroId = carros.find((carro) => {
		if (carro.identificador === id) {
			return carro;
		} else {
			return false;
		}
	});
	if (!carroId) {
		return alert('Carro não encontrado!');
	} else {
		const novaCor = prompt('Digite a nova cor!');
		const novoPreco = prompt('Digite o novo preço!');
		carroId.cor = novaCor ? novaCor : carroId.cor;
		carroId.preco = novoPreco ? novoPreco : carroId.preco;
	}
}

function removerVeiculo() {
	const id = parseInt(prompt('Digite o ID do carro para ser removido!'));
	const carroId = carros.findIndex((carro) => {
		carro.identificador === id;
		// if (carro.identificador === id) {
		// 	return carro;
		// } else {
		// 	return false;
		// }
	});
	if (!carroId) {
		return alert('Carro não encontrado!');
	} else {
		// const index = carros.findIndex(
		// 	(carro) => carro.identificador === carroId.identificador
		// );
		carros.splice(carroId, 1);
		alert('Veículo removido com Sucesso!');
	}
}
