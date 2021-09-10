
    // const app = Vue.createApp({
    //     el: '#app',
    //     data: {
    //       message: 'Hello Vue!'
    //     }
    //   })
    //   app.mount('#app');
    
    //   Vue.component('button-counter', {
    //    el: '#components-demo',
    //     data: function () {
    //       return {
    //         count: 0
    //       }
    //     },
    //     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    //   })
      


      
      const app = Vue.createApp({
          data() {
            return {
              count: 0
            };
          },
          methods: {
            addCountPlus() {
              this.count++
            }
          }
      });

      app.mount('#app');


var animalApp = new Vue({
  el: '#animalApp',
  data: {
    renderAnimalName: "<h1> Tiger </h1>",
    renderAnimalDescription: "<p> This is a white tiger. Tigers are one of the most deadly of the big cats.</p>",
    animalPic: ""
  }
});

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })
