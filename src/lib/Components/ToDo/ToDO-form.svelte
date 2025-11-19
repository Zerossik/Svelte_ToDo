<script lang="ts">
  let { onChange } = $props();
  let todoTitle = $state<string>("");
  const handlerSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onChange(todoTitle);
    todoTitle = "";
  };
</script>

<form class="form" onsubmit={handlerSubmit}>
  <div class="input-wrap">
    <input
      type="text"
      name="todo-title"
      autocomplete="on"
      placeholder="add a new task"
      class="form__input"
      bind:value={todoTitle}
    />
    <button type="submit" class="form__add-button">+</button>
  </div>
</form>

<style lang="scss">
  .form {
    display: flex;
    justify-content: center;
    width: 100%;
    .input-wrap {
      position: relative;
      display: inline-block;
      width: 100%;
      max-width: 320px;
    }
    &__input {
      padding: 8px 35px 8px 8px;
      width: 100%;
      border: 2px solid grey;
      border-radius: 4px;
      background-color: #f5f5f5;
      outline: none;

      &:focus {
        border: 2px solid #fe6347;
      }
      &::placeholder {
        font-size: 1rem;
      }
    }
    &__add-button {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);

      width: 24px;
      height: 24px;
      border: none;
      border-radius: 4px;
      background-color: #fe6347;

      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  }
</style>
