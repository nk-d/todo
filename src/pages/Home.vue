<template>
  <div class="home">
    <AddCategories />
    <ListCategories />
  </div>
</template>

<script>
import AddCategories from '@/components/AddCategories.vue'
import ListCategories from '@/components/ListCategories.vue'

export default {
  name: 'Home',
  components: {
    AddCategories,
    ListCategories
  }
}
</script>
