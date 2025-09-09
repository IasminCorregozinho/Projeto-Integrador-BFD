// desafio integrador 

const prompt = require('prompt-sync')({ sigint: true });

const produtos = [];

function cadastrarProduto(nome, preco, quantidade) { // Função para cadastrar produtos
    if (!nome || !nome.trim()) {
        console.log("O nome não pode ser vago.");
        return;
    }

    // Verifica se já existe um produto com o mesmo nome (ignorando maiúsculas/minúsculas)
    const existe = produtos.some(
        (p) => p.nome.trim().toLowerCase() === nome.trim().toLowerCase()
    );
    if (existe) {
        console.log("Produto já cadastrado com esse nome. Não é permitido duplicar.");
        return;
    }

    if (!Number.isFinite(preco) || preco <= 0) {
        console.log("Inválido. Preço precisa ser maior que 0.");
        return;
    }

    if (!Number.isInteger(quantidade) || quantidade < 0) {
        console.log("Inválido. Quantidade precisa ser maior ou igual a 0.");
        return;
    }

    produtos.push({ nome: nome.trim(), preco, quantidade });
    console.log("Produto cadastrado com sucesso!");
}

function listarProdutos() { // Função para listar produtos
    if (produtos.length === 0) {
        console.log("Você não possui itens cadastrados.");
    } else {
        console.log(" ---Aqui está seu estoque cadastrado----- ");
        produtos.forEach((produto, index) => {
            console.log(`- ${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}`);
        });

        // Calcula o valor total
        let total = 0;
        produtos.forEach((produto) => {
            total += produto.preco * produto.quantidade;
        });
        console.log(`Valor total do estoque: R$ ${total.toFixed(2)}`);
    }
}

function buscarProdutoPorNome() { // Função para buscar produtos por nome
    const nome = prompt('Digite o nome do produto que deseja buscar: ').trim();

    const produto = produtos.find((p) => p.nome.toLowerCase() === nome.toLowerCase());

    if (produto) {
        console.log(`Produto encontrado: ${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}`);
    } else {
        console.log("Produto não encontrado.");
    }
}

function calcularTotalNoEstoque() { // Função para calcular o total em estoque
    let total = 0;
    produtos.forEach((produto) => {
        total += produto.preco * produto.quantidade;
    });
    console.log(`Valor total em estoque: R$ ${total.toFixed(2)}`);
}

function removerProduto() { // Função para remover produtos
    const nome = prompt('Digite o nome do produto que deseja remover: ').trim();

    const index = produtos.findIndex((p) => p.nome.toLowerCase() === nome.toLowerCase());

    if (index !== -1) {
        produtos.splice(index, 1);
        console.log("Produto removido com sucesso.");
    } else {
        console.log("Produto não encontrado.");
    }
}

console.log('----------Bem vindo ao Sistema de Cadastro de Produtos----------');

function menuPrincipal() {
  while (true) {
    console.log('\n--- MENU DE OPÇÕES ---');
    console.log('[1]. Cadastrar produtos');
    console.log('[2]. Listar produtos');
    console.log('[3]. Buscar por nome');
    console.log('[4]. Total em estoque');
    console.log('[5]. Remover produto');
    console.log('[0]. Sair');
    console.log('----------------------');

    let opcao = prompt('Escolha uma opção: ');

    if (opcao === '1') { // se 
      let produtoCadastrado= prompt('Qual item deseja cadastrar? ');
      let precoStr = prompt('Digite o preço do produto: ');
      precoStr = precoStr.replace(',', '.'); // Troca vírgula por ponto
      const preco = parseFloat(precoStr);
      const quantidade = parseInt(prompt('Digite a quantidade do produto: '), 10);
      cadastrarProduto(produtoCadastrado, preco, quantidade);

    } else if (opcao === '2') {
      listarProdutos();

    } else if (opcao === '3') {
      buscarProdutoPorNome();

    } else if (opcao === '4') {
      calcularTotalNoEstoque();

    } else if (opcao === '5') {
      removerProduto();

    } else if (opcao === '0') {
      console.log('Finalizado... Até mais!');
      return;

    } else { // se não for nenhuma das opções, faça isso
      console.log('Opção inválida. Por favor, escolha uma opção de 0 a 5.');
    }

  }
}

menuPrincipal();

