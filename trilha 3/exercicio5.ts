abstract class Funcionario {
  constructor(
    private nome: string,
    private salario: number
  ) {}

  getSalario(): number {
    return this.salario;
  }

  getNome(): string {
    return this.nome;
  }

  abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.10;
  }
}

class Operario extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.05;
  }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach(f => {
    const bonus = f.calcularBonus();
    const final = f.getSalario() + bonus;
    console.log(`${f.getNome()} - Salário final: R$ ${final}`);
  });
}

const listaFuncionarios: Funcionario[] = [
  new Gerente("Carlos", 5000),
  new Operario("João", 2000)
];

calcularSalarioComBonus(listaFuncionarios);
