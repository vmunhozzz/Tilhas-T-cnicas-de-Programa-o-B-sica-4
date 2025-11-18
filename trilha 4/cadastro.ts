interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  produtos: ProdutoLoja[];

  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: ProdutoLoja): void {
    this.produtos.push(produto);
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(p => p.codigo === codigo);
  }
}
