<template>
    <div class="list">

        <div class="list__header">
            <h1 class="header-level-1">Ваши задачи категории:</h1>
        </div>

        <Item
                v-for="todo in todoByCategory"
                :key="todo.id"
                :todo="todo" />

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