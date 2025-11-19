<script lang="ts">
  import { Trash2 } from "lucide-svelte";
  import todo from "../../Models/ToDo.svelte.js";
  const { title, id, isCompleted } = $props();

  const handlerDelete = () => {
    todo.removeToDo(id);
  };

  const toggleIsCompleted = () => {
    todo.updateToDo(id, { isCompleted: !isCompleted });
  };
</script>

<div class="todo__item" {id}>
  <div class="title__wrap">
    <input type="checkbox" checked={isCompleted} onchange={toggleIsCompleted} />
    <p class="todo__item-title" class:isCompleted>{title}</p>
  </div>
  <button type="button" class="todo__trash-btn" onclick={handlerDelete}
    ><Trash2 class="todo__trash-icon" /></button
  >
</div>

<style lang="scss">
  .todo__item {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: lightgray;
  }
  .title__wrap {
    display: flex;
    gap: 6px;

    input {
      cursor: pointer;
    }
  }
  .isCompleted {
    text-decoration: line-through;
  }
  .todo__trash-btn {
    border: none;
    background-color: transparent;
  }
  :global(.todo__trash-icon):hover {
    stroke: #fe6347;
  }
</style>
