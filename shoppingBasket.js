var ShoppingBasket = function(){
  this.basket = []
}

ShoppingBasket.prototype = {
  addItem: function(item){
    this.basket.push(item);
  },
  removeLastItem: function(){
    this.basket.pop();
  }
}

module.exports = ShoppingBasket