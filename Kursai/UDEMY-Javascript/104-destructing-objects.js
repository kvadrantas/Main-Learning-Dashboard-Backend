const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  ///////////////////////////////////////
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    // ES6 enhanced object literals
    openingHours: {
      [weekdays[3]]: {
        open: 12,
        close: 22,
      },
      [weekdays[4]]: {
        open: 11,
        close: 23,
      },
      [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  
    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
    },
  
    orderPasta(ing1, ing2, ing3) {
      console.log(
        `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
      );
    },
  
    orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    },
  };
  ///////////////////////////////////////



// 5.
const {
    odds: { team1, x: draw, team2 },
  } = game;
  console.log(team1, draw, team2);
  
  // 6.
  console.log(`------------------------`);
  const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
  };
  
  // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  // printGoals('Davies', 'Muller');
  printGoals(...game.scored);
  
  // 7.
  console.log(`------------------------`);
  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likely to win');
  


  

  ///////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
  });
  
  restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
  });
  
  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);
  
  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);
  
  // Default values
  const { menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters);
  
  // Mutating variables
  let a = 111;
  let b = 999;
  const obj = { a: 23, b: 7, c: 14 };
  ({ a, b } = obj);
  console.log(a, b);
  
  // Nested objects
  const {
    fri: { open: o, close: c },
  } = openingHours;
  console.log(o, c);
  
  
  