function pizzaOven (crustType,cauceType,cheeseType,toppings){
    var pizza = {};
    pizza.crustType = crustType
    pizza.SauceType = cauceType
    pizza.cheeseType = cheeseType
    pizza.toppings = toppings
    return pizza
}

var p1 = pizzaOven("deep dish","turkey","provolone","mustard");
var p2 = pizzaOven("hand tossed", "marianara",["mozarella","feta"],["mushrooms","olives","onions"])

console.log(p2)




