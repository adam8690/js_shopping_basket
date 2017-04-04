var ShoppingBasket = function(){
  this.basket = []
  this.totalValue = 0
}

ShoppingBasket.prototype = {
  addItem: function(item){
    this.basket.push(item);
  },
  removeLastItem: function(){
    this.basket.pop();
  },
  updateTotalValue: function(){
    for (var i = 0; i < this.basket.length; i++) {
      this.totalValue += this.basket[i].price
    }
  },
  reduceTotalValueByDiscount: function(){
    if (this.totalValue >= 2000) {
      this.totalValue *= 0.9
    }
  }
}

module.exports = ShoppingBasket