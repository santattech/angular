(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Cats Eye',
    price: 8800,
    description: 'In color it resembles the color of the neem fruit with silver streak which comes in chrysoberyl stone.' +
      'It also comes in other colors like black, black & white, yellow, pale blue and light red. It clears obstacles' +
      'hindrances and wards off evil effects of witch crafts.'
  }
})();
