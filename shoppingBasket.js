var ShoppingBasket = function(){
  this.basket = []
}

ShoppingBasket.prototype = {
  addItem: function(item){
    this.basket.push(item);
  }
}

module.exports = ShoppingBasket