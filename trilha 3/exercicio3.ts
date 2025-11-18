class Pagamento {
  processar(): void {
    console.log("Processando pagamento genérico...");
  }
}

class PagamentoCartao extends Pagamento {
  constructor(private numeroCartao: string) {
    super();
  }

  private validarCartao(): boolean {
    return this.numeroCartao.length === 16;
  }

  processar(): void {
    if (this.validarCartao()) {
      console.log("Pagamento com cartão aprovado!");
    } else {
      console.log("Número de cartão inválido.");
    }
  }
}

class PagamentoBoleto extends Pagamento {
  private gerarCodigo(): string {
    return Math.random().toString().slice(2, 14);
  }

  processar(): void {
    const codigo = this.gerarCodigo();
    console.log("Boleto gerado! Código:", codigo);
  }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
  pagamentos.forEach(p => p.processar());
}

// Teste
const pagamentos: Pagamento[] = [
  new PagamentoCartao("1234567890123456"),
  new PagamentoBoleto()
];

processarPagamentos(pagamentos);
