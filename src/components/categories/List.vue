<template>
    <div class="list-categories">

        <div style="display: flex; align-items: center; justify-content: space-between">
            <h2 class="header-level-2">Выберите категорию:</h2>
            <router-link :to="{ name: 'Todos' }">Все задачи</router-link>
        </div>

        <Item
                v-for="category in allCategories"
                :key="category.id"
                :title="category.title"
                :id="category.id"
                :color="category.color" />

    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Item from './Item.vue';

    export default {
        name: 'ListCategories',
        computed: mapGetters(["allCategories"]),
        components: {
            Item
        }
    }
</script>

<style lang="scss">

</style>
