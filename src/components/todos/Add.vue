<template>
    <form class="add add--categories" v-on:submit.prevent="submitHandler">

        <h2 class="header-level-2 add__header">Добавление задачи:</h2>
        <input type="text" v-model="todo" name="todo" placeholder="Ваша задача" class="add__text" />
        <div class="add__bottom">
            <button class="add__button">
                Добавить
            </button>
        </div>
        <div class="add__error" v-if="emptyTodo" style="color: red;">Введите задачу</div>
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
                        categoryId: parseInt(this.categoryId),
                        active: true });
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
