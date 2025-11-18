class Animal {
  private energia: number;

  constructor(energia: number = 50) {
    this.energia = energia;
  }

  protected alterarEnergia(valor: number): void {
    this.energia += valor;
  }

  comer(): void {
    this.alterarEnergia(10);
  }

  statusEnergia(): void {
    console.log(`Energia atual: ${this.energia}`);
  }
}

class Leao extends Animal {
  comer(): void {
    console.log("O leão está caçando...");
    this.alterarEnergia(-20);
    super.comer();  
  }
}

class Passaro extends Animal {
  comer(): void {
    console.log("O pássaro está bicando comida...");
    super.comer();
  }
}

function alimentarAnimais(animais: Animal[]): void {
  animais.forEach(a => {
    a.comer();
    a.statusEnergia();
  });
}

const animais: Animal[] = [
  new Leao(),
  new Passaro()
];

alimentarAnimais(animais);
