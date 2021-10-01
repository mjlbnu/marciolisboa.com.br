---
date: 2021-09-30
title: "Javascript - Sets"
template: post
thumbnail: "../thumbnails/javascript.png"
slug: javascript-sets
categories:
  - javascript
tags:
  - javascript
  - sets
  - data structures
  - modern operators
---

<img src="../images/sets.png" alt="Event Loop Diagram"/>

## Sets - a new data structure added in ES6

- A collection of a unique values
- No key values
- Iterable
- The order is irrelevant

### Creating a new Set

```javascript
const orderSet = new Set(["Pasta", "Pizza", "Pizza"]);
console.log(orderSet); // Set(2) {'Pasta', 'Pizza'}
```

### Getting the size

```javascript
console.log(orderSet.size); // 2
```

### Checking if the element is in the Set

```javascript
console.log(orderSet.has("Pizza")); // true
```

### Adding new elements

```javascript
orderSet.add("Garlic Bread");
console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}
```

### Deleting a element

```javascript
orderSet.delete("Pasta");
console.log(orderSet); // Set(2) {'Pizza', 'Garlic Bread'}
```

### Deleting all elements

```javascript
orderSet.clear();
console.log(orderSet); // Set(0) {size: 0}
```

### Loop over a Set

```javascript
for (const order of orderSet) console.log(order);
// Pizza
// Garlic Bread
```

### Removing the duplicated elements from a array using Set

```javascript
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
let staffUnique = new Set(staff);
console.log(staffUnique); // Set(3) {'Waiter', 'Chef', 'Manager'}
```

### Converting Set to an array using spread operator

```javascript
staffUnique = [...new Set(staff)];
console.log(staffUnique); // (3) ['Waiter', 'Chef', 'Manager']
```
