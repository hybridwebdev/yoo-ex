export default {
  install(Vue, { key, store }) {
    Vue.mixin({
      beforeCreate: function() {
        this[key] = store;
      }
    });
  }
};
