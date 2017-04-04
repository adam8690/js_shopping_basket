var ShoppingBasket = function(){
  this.basket = []
  this.totalValue = 0
  this.customer = {
    name: "Adam",
    hasDiscountCard: true
  }
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
  reduceTotalValueByDiscount: function() {
    if (this.totalValue >= 2000) {
      this.totalValue *= 0.9
    }
  },
  reduceTotalValueIfDiscountCardPresent: function() {
    if (this.customer.hasDiscountCard) {
      this.totalValue *= 0.95
    }
  }
}

module.exports = ShoppingBasket