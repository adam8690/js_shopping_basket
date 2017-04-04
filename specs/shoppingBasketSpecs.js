var assert = require('assert');
var Item = require('../item.js');
var ShoppingBasket = require('../shoppingBasket.js');

describe ('ShoppingBasket', function() {

  var shoppingBasket

  beforeEach(function(){
    shoppingBasket = new ShoppingBasket()
  })

  it ('starts empty', function() {
    assert.strictEqual(0, shoppingBasket.basket.length)
  })

})