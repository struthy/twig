import Vue from "vue";
Vue.use(require("vue-moment"));
import weatherevents from "./../apps/weather.vue";

export default () => {
  Array.prototype.unique = function() {
    return this.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  };
  let newApp = document.getElementById("weatherApp");

  if (!newApp) return;

  new Vue({
    el: newApp,
    render: (h) => h(weatherevents),
  });
};
