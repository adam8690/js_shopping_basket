var assert = require('assert');
var Item = require('../item.js');

describe('Item', function(){

  var item;
  beforeEach(function(){
    item = new Item("milk", 100, true);
  })

  it('should have a name', function(){
    assert.strictEqual("milk", item.name);
  })

  it('should have price', function(){
    assert.strictEqual(100, item.price);
  })

  it('should have a bogof state', function(){
    assert.strictEqual(true, item.isBogof);
  })


})