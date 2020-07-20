<template>
    <div class="list-categories">

        <div style="display: flex; align-items: center; justify-content: space-between">
            <h2 class="header-level-2">Выберите категорию:</h2>
            <router-link :to="{ name: 'Todos' }">Все задачи</router-link>
        </div>

        <Category
                v-for="category in allCategories"
                :key="category.id"
                :title="category.title"
                :id="category.id"
                :color="category.color" />

    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Category from '@/components/Category.vue';

    export default {
        name: 'ListCategories',
        computed: mapGetters(["allCategories"]),
        components: {
            Category
        }
    }
</script>

<style lang="scss">

</style>
