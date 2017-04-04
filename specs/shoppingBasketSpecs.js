var assert = require('assert');
var Item = require('../item.js');
var ShoppingBasket = require('../shoppingBasket.js');

describe ('ShoppingBasket', function() {

  var shoppingBasket
  var item;
  var item2;

  beforeEach(function(){
    shoppingBasket = new ShoppingBasket()
    item = new Item("eggs", 200, true);
    item2 = new Item("champagne", 2000, true);
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

  it('can get total value in basket', function(){
    shoppingBasket.addItem(item)
    shoppingBasket.addItem(item)
    shoppingBasket.addItem(item)
    shoppingBasket.updateTotalValue()
    assert.strictEqual(600, shoppingBasket.totalValue)
  })

  // it('can apply 10% over £20', function(){
  //   shoppingBasket.addItem(item)
  //   shoppingBasket.addItem(item2)
  //   assert.strictEqual(1980, shoppingBasket.discountedValue())
  // })

})