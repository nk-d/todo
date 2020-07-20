<template>
    <div class="category-item">
        <router-link :to="{ name: 'Todos', params: { id }}" :style="{color}" class="category-item__link">{{title}}</router-link>
        -
        <button @click="removeCategory(id)" class="category-item__delete">X</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        name: 'Category',
        props: {
            id: Number,
            title: String,
            color: String
        },
        methods: {
            ...mapActions(["removeCategory"])
        }
    }
</script>

<style lang="scss">

</style>
