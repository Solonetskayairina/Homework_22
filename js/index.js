    class Hamburger {
        constructor(size, stuffing) {
            this.size = size;
            this.stuffing = Array.isArray(stuffing) ? stuffing : [stuffing];
            this.toppings = [];
        }

        static sizeSmall = 'small';
        static sizeBig = 'big';
        static stuffingCheese = 'cheese';
        static stuffingSalad = 'salad';
        static stuffingPotato = 'potato';
        static toppingSeasoning = 'seasoning';
        static toppingMayonnaise = 'mayonnaise';

        calculatePrice() {
            let price = 0;
            price += this.size === 'small' ? 50 : 100;
                this.stuffing.forEach(stuffing => {
                    if (stuffing === 'cheese') {
                        price += 10;
                    }
                    if (stuffing === 'salad') {
                        price += 20;
                    } else if (stuffing === 'potato') {
                        price += 15;
                    }
                })
            this.toppings.forEach(topping => {
                if( topping ==='seasoning'){
                    price += 15;
                } else if (topping === 'mayonnaise') {
                    price += 20;
                }
            })

            return price;
        }

        calculateCalories() {
            let calories = 0;
            calories += this.size === 'small' ? 20 : 40;
                this.stuffing.forEach(stuffing => {
                    if (stuffing === 'cheese') {
                        calories += 20;
                    }
                    if (stuffing === 'salad') {
                        calories += 5;
                    } else if (stuffing === 'potato') {
                        calories += 10;
                    }
                })

            this.toppings.forEach(topping => {
                if(topping === 'seasoning') {
                    calories += 0;
                } else if(topping === 'mayonnaise'){
                    calories += 5;
                }
            })

            return calories;
        }

        addTopping(topping) {
            this.toppings.push(topping);
        }
    }

    const  hamburger = new Hamburger(Hamburger.sizeSmall, Hamburger.stuffingCheese)
    console.log(hamburger)

    hamburger.addTopping(Hamburger.toppingMayonnaise);

    console.log("Calories:" + hamburger.calculateCalories());

    console.log("Price:" + hamburger.calculatePrice());

    hamburger.addTopping(Hamburger.toppingSeasoning);

    console.log("Price with sauce:" + hamburger.calculatePrice());