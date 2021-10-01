---
date: 2021-09-30
title: "Javascript - Destructuring"
template: post
thumbnail: "../thumbnails/javascript.png"
slug: javascript-destructuring
categories:
  - javascript
tags:
  - javascript
  - destructuring
  - data structures
  - modern operators
---

<img src="../images/destructuring.png" alt="Event Loop Diagram"/>

## What is Destructuring?

Destructuring is an ES6 feature and it's basically a way of unpacking values from an array or an object into separate values. So in other words destructuring is to break a complex data structure down into a smaller data structure like a variable.

For arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.

### Destructuring an array

```javascript
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c); // 2 3 4
```

### Object used in examples below

```javascript
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // Method that returns an array
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
```

### Taking just the first two elements of the array

```javascript
let [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria
```

### Switching variables using destructuring

```javascript
[second, first] = [first, second];
console.log(first, second); // Pizzeria Italian
```

### Skiping an element

```javascript
const [_first, , _second] = restaurant.categories;
console.log(_first, _second); // Italian Vegetarian
```

### Receiving two return values from a function and destructuring to two variables

```javascript
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main); // Garlic Bread Pizza
```

### Destructuring nested arrays - an array inside an array

```javascript
const nested = [2, 4, [5, 6]];
const [first_, , third] = nested;
console.log(first_, third); // 2 [5, 6]
```

### Nested destructuring - destructuring inside of destructuring to take all individual values from a nested array as separate variables

```javascript
const [x, , [y, z]] = nested;
console.log(x, y, z); // 2 5 6
```

### Setting default values for the variables on destructuring

```javascript
const [p = 1, q = 1, r = 1] = [7, 8];
console.log(p, q, r); // 7 8 1
```
