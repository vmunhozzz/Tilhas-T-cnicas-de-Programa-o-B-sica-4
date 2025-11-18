class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
      return;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado. Saldo restante: R$${this.saldo}`);
  }
}
