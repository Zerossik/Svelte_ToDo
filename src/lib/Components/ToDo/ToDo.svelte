<script lang="ts">
  import todo from "../../Models/ToDo.svelte.js";
  import ToDoList from "./ToDo-list.svelte";
  import ToDoForm from "./ToDO-form.svelte";

  const addNewTodo = (title: string) => {
    if (!title.trim()) throw new Error("Title is required");
    const newToDo = {
      id: crypto.randomUUID(),
      title: title,
      isCompleted: false,
      createdAt: new Date(),
    };

    todo.addToDo(newToDo);
  };
</script>

<div class="toDo">
  <h1 class="toDo__title">ToDo List</h1>
  <ToDoForm onChange={addNewTodo} />
  <ToDoList />
</div>

<style lang="scss">
  .toDo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    min-width: 320px;
    height: 100%;

    border-radius: 8px;

    &__title {
      text-align: center;
      margin-bottom: 20px;
    }
  }
</style>
