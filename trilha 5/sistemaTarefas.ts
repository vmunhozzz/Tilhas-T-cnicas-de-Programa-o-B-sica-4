abstract class TaskManager {
  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}

// Usando objetos para diferenciar tarefas
interface TaskObject {
  tipo: "projeto" | "diaria";
  descricao: string;
}

class Project extends TaskManager {
  private tasks: TaskObject[] = [];

  addTask(task: string): void {
    const exists = this.tasks.some(t => t.descricao === task);
    if (!exists) {
      this.tasks.push({ tipo: "projeto", descricao: task });
    }
  }

  listTasks(): string[] {
    return this.tasks.map(t => `[Projeto] ${t.descricao}`);
  }
}

class DailyTasks extends TaskManager {
  private tasks: TaskObject[] = [];

  addTask(task: string): void {
    const exists = this.tasks.some(t => t.descricao === task);
    if (!exists) {
      this.tasks.push({ tipo: "diaria", descricao: task });
    }
  }

  listTasks(): string[] {
    return this.tasks.map(t => `[Diária] ${t.descricao}`);
  }
}
