<template>
    <form class="add add--categories" v-on:submit.prevent="submitHandler">

        <h1 class="header-level-1 add__header">Добавление категории:</h1>
        <input type="text" v-model="todo" name="todo" placeholder="Ваша задача" class="add__text" />
        <button>
            Добавить задачу
        </button>
        <br>
        <br>
        <div class="add__error" v-if="emptyTodo" style="color: red;">Введите задачу</div>
        <hr>

    </form>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        name: 'AddTodo',
        data() {
            return {
                todo: '',
                emptyTodo: false
            }
        },
        props: ['categoryId'],
        methods: {
            ...mapActions(["addTodo"]),
            submitHandler () {
                if (this.todo) {

                    this.addTodo({
                        todo: this.todo,
                        categoryId: parseInt(this.categoryId) });
                    this.clearData();

                } else {

                    this.emptyTodo = true;
                    window.setTimeout(() => {
                        this.emptyTodo = false;
                    }, 5e3);

                }
            },
            clearData() {
                this.todo = '';
                this.emptyTodo = false;
            }
        }
    }
</script>

<style lang="scss">

</style>
