import { SvelteMap } from 'svelte/reactivity';

interface ToDoI {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
  dedline?: Date;
}

class ToDoModel {
  private toDoList: SvelteMap<string, ToDoI>;
  constructor() {
    $effect.root(() => {
      $effect(() => {
        this.setTodoToLocalStorage();
      });
    });
    this.toDoList = new SvelteMap(this.getTodoFromLocalStorage());
  }
  addToDo(toDo: ToDoI) {
    this.toDoList.set(toDo.id, toDo);
  }

  removeToDo(id: string) {
    this.toDoList.delete(id);
  }

  updateToDo(id: string, updatedFields: Partial<ToDoI>) {
    const existingToDo = this.toDoList.get(id);
    if (!existingToDo) throw new Error(`ToDo with id ${id} not found`);
    const updatedToDo = { ...existingToDo, ...updatedFields };
    this.toDoList.set(id, updatedToDo);
  }

  getToDoList(filter?: 'complited' | 'incomplete'): ToDoI[] {
    if (filter === 'complited') return [...this.toDoList.values()].filter(todo => todo.isCompleted);

    if (filter === 'incomplete')
      return [...this.toDoList.values()].filter(todo => !todo.isCompleted);

    return [...this.toDoList.values()].sort(
      (a, b) => Number(a.isCompleted) - Number(b.isCompleted),
    );
  }
  setTodoToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify([...this.toDoList.entries()]));
  }
  getTodoFromLocalStorage() {
    const data = localStorage.getItem('todoList');
    if (!data) return;
    return JSON.parse(data);
  }
}

export default new ToDoModel();
