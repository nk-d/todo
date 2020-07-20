<template>
    <div class="list-categories">

        <div style="display: flex; align-items: center; justify-content: space-between">
            <h2 class="header-level-2">Ваши задачи категории:</h2>
            <router-link :to="{ name: 'Todos' }">Все задачи</router-link>
        </div>

        <Item
                v-for="todo in todoByCategory"
                :key="todo.id"
                :todo="todo.todo"
                :id="todo.id"
                :color="todo.color" />

    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Item from './Item';

    export default {
        name: 'ListTodos',
        props: ['categoryId'],
        computed: {
            ...mapGetters(["allTodos"]),
            todoByCategory() {
                if (this.categoryId) {
                    return this.allTodos.filter(todo => todo.categoryId === parseInt(this.categoryId));
                } else {
                    return this.allTodos;
                }
            }
        },
        components: {
            Item
        }
    }
</script>

<style lang="scss">

</style>
