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
