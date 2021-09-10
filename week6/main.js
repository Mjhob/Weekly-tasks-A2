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
