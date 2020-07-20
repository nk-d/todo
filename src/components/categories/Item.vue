<template>
    <div class="category" :style="{ backgroundColor: color }">
        <h3 class="category__title">{{title}}</h3>
        <div class="category__todos">
            <div :class="{ 'category__todos': true, 'category__todos--completed': !todo.active }" v-for="todo in todoByCategory" :key="todo.id">
                - {{todo.todo}}
            </div>
        </div>
        <div class="category__bottom">
            <router-link :to="{ name: 'Todos', params: { id }}" class="category__open">Открыть</router-link>
            <button @click="removeCategory(id)" class="category__delete">Удалить</button>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: 'Category',
        props: {
            id: Number,
            title: String,
            color: String
        },
        computed: {
            ...mapGetters(["allTodos"]),
            todoByCategory() {
                if (this.id) {
                    return this.allTodos.filter(todo => todo.categoryId === parseInt(this.id));
                } else {
                    return [];
                }
            }
        },
        methods: {
            ...mapActions(["removeCategory"])
        }
    }
</script>
