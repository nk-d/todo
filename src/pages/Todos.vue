<template>
  <div class="todos">
    <router-link :to="{ name: 'Home' }">К выбору категорий</router-link>
    <hr>
    <AddTodo v-if="$route.params.id !== undefined" :categoryId="$route.params.id" />
    <div v-else>Для добавления задачи, выберите категорию<hr /></div>
    <h1>This is an todos page {{$route.params.id}}</h1>
  </div>
</template>

<script>
  import AddTodo from '@/components/AddTodo.vue';

  export default {
    name: 'ListTodos',
    components: { AddTodo }
  }
</script>

<style lang="scss">

</style>