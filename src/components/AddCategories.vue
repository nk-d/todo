<template>
  <form class="add add--categories" v-on:submit.prevent="submitHandler">

    <h1 class="header-level-1 add__header">Добавление категории:</h1>
    <input type="text" v-model="title" name="title" placeholder="Название категории" class="add__title" />
    <select name="changeColor" v-model="color" id="color" class="add__change-color">
      <option value="#dcdcdc">Серый</option>
      <option value="#ff0000">Красный</option>
      <option value="#66ff00">Зеленый</option>
      <option value="#ffa500">Оранжевый</option>
      <option value="#ffff00">Желтый</option>
      <option value="#0000ff">Синий</option>
      <option value="#8b00ff">Фиолетовый</option>
    </select>
    <button>
      Добавить категорию
    </button>
    <br>
    <br>
    <div class="add__error" v-if="emptyTitle" style="color: red;">Введите название</div>
    <hr>

  </form>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: 'AddCategories',
    data() {
      return {
        title: '',
        color: '#dcdcdc',
        emptyTitle: false
      }
    },
    methods: {
      ...mapActions(["addCategory"]),
      submitHandler () {
        if (this.title) {

          this.addCategory(this.title, this.color);
          this.clearData();

        } else {

          this.emptyTitle = true;
          window.setTimeout(() => {
            this.emptyTitle = false;
          }, 5e3);

        }
      },
      clearData() {
        this.title = '';
        this.color = '#dcdcdc';
        this.emptyTitle = false;
      }
    }
  }
</script>

<style lang="scss">

</style>
