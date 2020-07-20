import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories';
import todos from './modules/todos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    categories,
    todos
  }
});