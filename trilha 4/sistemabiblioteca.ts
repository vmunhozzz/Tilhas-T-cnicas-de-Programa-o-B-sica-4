interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  livros: Livro[];

  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(l => l.disponivel === true);
  }
}
