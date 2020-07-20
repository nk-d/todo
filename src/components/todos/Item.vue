<template>
    <div class="todo">
        <div :class="{ 'todo__text': true, 'todo__text--completed': !todo.active }" @click="statusHandler">
            {{todo.todo}}
        </div>
        <button @click="removeTodo(todo.id)" class="todo__delete">X</button>
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
