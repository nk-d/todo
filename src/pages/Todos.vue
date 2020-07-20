<template>
  <div class="todos">
    <router-link :to="{ name: 'Home' }">К выбору категорий</router-link>
    <AddTodo v-if="$route.params.id !== undefined" :categoryId="$route.params.id" />
    <div v-else>Для добавления задачи, выберите категорию<hr /></div>
    <ListItems :categoryId="$route.params.id" />
  </div>
</template>

<script>
  import AddTodo from '../components/todos/Add';
  import ListItems from "../components/todos/List";

  export default {
    name: 'ListTodos',
    components: { AddTodo, ListItems }
  }
</script>
