var assert = require('assert');
var Item = require('../item.js');
var ShoppingBasket = require('../shoppingBasket.js');

describe ('ShoppingBasket', function() {

  var shoppingBasket
  var item;

  beforeEach(function(){
    shoppingBasket = new ShoppingBasket()
    item = new Item("eggs", 200, true);
  })

  it ('starts empty', function() {
    assert.strictEqual(0, shoppingBasket.basket.length)
  })

  it ('can have multiple items', function() {
    shoppingBasket.addItem(item)
    shoppingBasket.addItem(item)
    assert.strictEqual(2, shoppingBasket.basket.length)
  })

  it('can remove items from basket', function(){
    shoppingBasket.addItem(item);
    shoppingBasket.removeLastItem();
    assert.strictEqual(0, shoppingBasket.basket.length);
  })

})