//week 5
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Enter event'
  }
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    message: 'Enter event'
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    message: 'Enter event'
  }
})

Vue.component('todo-item', {

  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app9 = new Vue({
  el: '#app-9',
  data: {
    groceryList: [
      { id: 0, text: 'Space' },
      { id: 1, text: 'moon' },
      { id: 2, text: 'Planets' }
    ]
  }
})

//week 6

new Vue({
  el: '#flights-demo',
  data: {
    selected: 'New Sheppard',
    picked : 'one',
  }
})

var planetList = new Vue({
  el: '#planet-list',
  data: {
    header: 'Planet data base',
    newItem:'',
    planets: [
      'earth',
      'venus',
      'mars',
    ]
  }
});

//week 7 working

Vue.component('child',{
  props: {
    comment: {
      type: String,
      required: true
    },
    likes: 
    {
      type: Number,
    }
  },
  template: `<div>{{ comment }}, {{ likes }}</div>`
});

new Vue({
  el: '#comments-app',
  data() {
    return {
      comment: 'This web page is great!',
      likes: '20',
    }
  }
})

// var commentsApp = new Vue({
//   el: "#comments-app",
//   data: {
//     comment: "Wow such a great website!",
//   },
//   components: {
//     "comment-wrapper": {
//       props: ["comment"],
//       data: function() {
//         return { likes: "20"};
//       },
//       template: "<div> {{ comment }} {{ likes }} </div>",
//     },
//   },
// });
