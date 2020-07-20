<template>
    <div class="list">

        <div class="list__header">
            <h1 class="header-level-1">Выберите категорию:</h1>
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
