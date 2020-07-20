<template>
  <form class="add add--categories" v-on:submit.prevent="submitHandler">

    <h2 class="header-level-2 add__header">Добавление категории:</h2>
    <input type="text" v-model="title" name="title" placeholder="Название категории" class="add__text" />
    <div class="add__bottom">
      <select name="changeColor" v-model="color" id="color" class="add__change-color">
        <option value="#ffd6dd">Красный</option>
        <option value="#e3ffd1">Зеленый</option>
        <option value="#ffedcc">Оранжевый</option>
        <option value="#ffff00">Желтый</option>
        <option value="#ffffd1">Синий</option>
        <option value="#e8ccff">Фиолетовый</option>
      </select>
      <button class="add__button">
        Добавить
      </button>
    </div>
    <div class="add__error" v-if="emptyTitle">Введите название</div>
  </form>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: 'AddCategories',
    data() {
      return {
        title: '',
        color: '#ffd6dd',
        emptyTitle: false
      }
    },
    methods: {
      ...mapActions(["addCategory"]),
      submitHandler () {
        if (this.title) {

          this.addCategory({
            title: this.title,
            color: this.color });
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
        this.color = '#ffd6dd';
        this.emptyTitle = false;
      }
    }
  }
</script>
