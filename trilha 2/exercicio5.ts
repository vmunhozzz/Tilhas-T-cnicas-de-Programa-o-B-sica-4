class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionar(compromisso: string): void {
    this.compromissos.push(compromisso);
    console.log(`Compromisso adicionado: ${compromisso}`);
  }

  listar(): void {
    console.log("Lista de compromissos:");
    this.compromissos.forEach((c, i) => {
      console.log(`${i + 1}. ${c}`);
    });
  }
}
