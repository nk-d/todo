<template>
    <div class="category-item">
        {{todo}}
        -
        <button @click="removeTodo(id)" class="category-item__delete">X</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        name: 'Todo',
        props: {
            id: Number,
            todo: String
        },
        methods: {
            ...mapActions(["removeTodo"])
        }
    }
</script>

<style lang="scss">

</style>
