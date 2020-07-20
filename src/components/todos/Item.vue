<template>
    <div class="todo">
        <div class="todo__content" @click="statusHandler">
            <div class="todo__text">{{todo.todo}}</div>
            <div class="todo__status" v-if="!todo.active">Завершено</div>
        </div>
        <button @click="removeTodo(id)" class="todo__delete">X</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        name: 'Todo',
        props: ['todo'],
        methods: {
            ...mapActions(["removeTodo", "updateTodo"]),
            statusHandler() {
                this.updateTodo({
                    ...this.todo,
                    active: !this.todo.active
                });
            }
        }
    }
</script>
