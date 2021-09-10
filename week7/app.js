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

const UserName = {
    props: {
      firstName: String,
      lastName: String
    },
    template: `
      <input 
        type="text"
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)">
  
      <input
        type="text"
        :value="lastName"
        @input="$emit('update:lastName', $event.target.value)">
    `
  };
  
  const HelloVueApp = {
    components: {
      UserName,
    },
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe',
      };
    },
  };
  
  Vue.createApp(HelloVueApp).mount('#v-model-example')
