<template>
    <div class="list-categories">

        <h2 class="header-level-2 add__header">Выберите категорию:</h2>

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
