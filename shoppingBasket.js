var ShoppingBasket = function(){
  this.basket = []
}

ShoppingBasket.prototype = {
  addItem: function(item){
    this.basket.push(item);
  },
  removeLastItem: function(){
    this.basket.pop();
  },
  totalValue: function(){
    totalValue = 0
    for (var i = 0; i < this.basket.length; i++) {
      totalValue += this.basket[i].price
    }
    return totalValue
  }
}

module.exports = ShoppingBasket