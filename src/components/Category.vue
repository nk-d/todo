<template>
    <div class="category">
        <a href="/" :style="{color}">{{title}}</a> - <button style="red" @click="removeCategory(id)">X</button>
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
