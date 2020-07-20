<template>
  <div class="home">
    <AddCategories />
    <ListCategories />
  </div>
</template>

<script>
import AddCategories from '../components/categories/Add'
import ListCategories from '../components/categories/List'

export default {
  name: 'Home',
  components: {
    AddCategories,
    ListCategories
  }
}
</script>
