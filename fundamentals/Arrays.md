# Arrays - JavaScript

It’s a ordered collections of values with a 0-index-base ordering them.

- List of comments of any social media
- Songs in a Playlist

## Creating Arrays

- Using Square Brackets `[ ]`

```jsx
//create an empty array
let songs = [];

//an array of strings
let colors = ['red', 'blue', 'green'];

//an array of numbers
let megaSena = [10, 1, 60, 46, 32, 17];

//a mixed array
let allOver = [true, 'dog', 20, null, NaN];
```

1. All arrays have a length.
2. Arrays are indexed.

## Array Methods

Array comes with a different bunch of methods built-in in the language.

| Array Methods |                                                     |
| ------------- | --------------------------------------------------- |
| push          | add an item to the end                              |
| pop           | remove an item from the end                         |
| shift         | remove an item from the start                       |
| unshift       | add an item to the start                            |
| concat        | merge arrays                                        |
| includes      | look for a value                                    |
| indexOf       | works like string.indexOf (returns -1 if not found) |
| join          | creates a string from an array                      |
| reverse       | reverses an array                                   |
| slice         | copies a portion on an array                        |
| splice        | removes elements                                    |
| sort          | sorts an array                                      |

- .push(args)

```jsx
let busLine = [600, 601]

busLine.push(761);

busLine;
> [600, 601, 761]
```

- .pop()

```jsx
let busLine = [600, 601, 761]

busLine.pop();

busLine;
> [600, 601]
```

- .unshift(args)

```jsx
let movieLine = ['joao', 'maria']

movieLine.unshift('amora');

movieLine = ['amora','joao','maria']
```

- .shift()

```jsx
let movieLine = ['amora','joao','maria']

movieLine.shift();

movieLine = ['joao', 'maria']
```

- .concat(args)

```jsx
const firstArray = ['a','b']
const secondArray = [1, 2]
const concatenatedArray = firstArray.concat(secondArray);

console.log(concatenatedArray);
> ['a', 'b', 1, 2]
```

- .includes(args)

```jsx
const firstArray = ['Blue', 'Lagoon', 'Li'];

console.log(firstArray.includes('Blue'));
>> true

console.log(firstArray.includes('goon'));
>> false
```

- .indexOf(args)

```jsx
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(beasts.indexOf('bison'));
>> 1
console.log(beasts.indexOf('bison', 2); //starting on index 2
>> 4
console.log(beasts.indexOf('dog'));
>> -1
```

- .reverse()

```jsx
const listOfNumbers = [1, 2, 3, 4, 5];

const reverseList = listOfNumbers.reverse();

console.log(reverseList);
>> [5, 4, 3, 2, 1]
```

- .slice(args)

```jsx
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
// starts on the exactly index, but ends one index before.

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
// The original array is not modified
```

- splice(args)

```jsx
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

colors.splice(5, 1) //to remove elements
>> ["indigo"]

console.log(colors);
>> ['red', 'orange', 'yellow', 'green', 'blue', 'violet']

colors.splice(1,0, 'gold'); //to add elements
>> ['gold']

console.log(colors);
>> ['red', 'gold', 'orange', 'yellow', 'green', 'blue', 'violet']
```

- sorts(args)

```jsx
const numbers = [4,2,3,1,5]

numbers.sort((a,b) => {
	 return a - b
});

console.log(numbers);
>> [1, 2, 3, 4, 5]
```