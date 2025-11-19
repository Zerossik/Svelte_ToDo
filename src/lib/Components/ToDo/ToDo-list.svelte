<script lang="ts">
  import todo from "../../Models/ToDo.svelte.js";
  import ToDoItem from "./ToDo-item.svelte";
  let filter = $state<"complited" | "incomplete" | undefined>();
  const todoList = $derived(todo.getToDoList(filter));
</script>

<div class="todo-list">
  <div class="todo-list__header">
    <p>Tasks - {todoList.length}</p>
    <div class="todo-list__filters">
      <label class="todo-list__filter"
        >All<input
          type="radio"
          checked
          name="filter"
          bind:group={filter}
          value={undefined}
        /></label
      >
      <label class="todo-list__filter"
        >complited<input
          type="radio"
          name="filter"
          bind:group={filter}
          value="complited"
        /></label
      >
      <label class="todo-list__filter"
        >incomplete<input
          type="radio"
          name="filter"
          bind:group={filter}
          value="incomplete"
        /></label
      >
    </div>
  </div>
  <ul class="todo-list__list">
    {#each todoList as todo (todo.id)}
      <li>
        <ToDoItem
          title={todo.title}
          id={todo.id}
          isCompleted={todo.isCompleted}
        />
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .todo-list {
    width: 100%;
    max-width: 400px;
    margin-top: 20px;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 20px;
      margin-bottom: 4px;
      p {
        text-wrap: nowrap;
      }
    }

    &__filters {
      display: flex;
      justify-content: center;
    }

    &__filter {
      cursor: pointer;
      padding: 6px 15px;

      border-radius: 4px;
      input[type="radio"] {
        display: none;
      }
    }
    &__filter:has(input:checked) {
      background-color: #fe6347;
      color: #ffffff;
    }

    &__list {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 12px;

      padding: 10px 0;
      overflow-y: auto;

      border-top: 1px solid #ccc;
    }
  }
</style>
