# Strings - JavaScript

`Primitive type` that represents `texts`.

- Strings are Indexed
- Index starts with 0.

```jsx
let animal = 'Dog';

animal[0]
> 'D'

animal[1]
> 'o'
```

## Methods

Every `String` have access to the same `methods`, from the `String` prototype.

- .toUpperCase()
1. It’s a non-destructive method, doesn’t change the original value.
2. Change all the string to Upper Case

```jsx
let newMessage = 'welcome!';
let yellMessage = newMessage.toUpperCase();

console.log(newMessage);
> 'welcome!'

console.log(yellMessage);
> 'WELCOME!'
```

- .toLowerCase()
1. It’s a non-destructive method, doesn’t change the original value.
2. Change all the string to Lower Case

```jsx
let newMessage = 'WELCOME!';
let whisperMessage = newMessage.LowerCase();

console.log(newMessage);
> 'WELCOME!'

console.log(whisperMessage);
> 'welcome!'
```

- .trim()
1. Trim the whitespaces from the beginning and in the end of the text;
2. It’s a non-destructive method, doesn’t change the original value.

```jsx
let helloWorld = '    hello world!     ';

console.log(helloWorld.trim());
> 'hello world!'
```

- .indexOf(args)
1. Need to pass the argument to find a value
2. Returns `-1` if the value is not found

```jsx
let fruit = 'banana'
fruit.indexOf('ana');
> 1

fruit.indexOf('app');
> -1
```

1. The reason to the first one returns `1` is because it’s the first occurrence.

- .slice(args)
1. Extract a portion of a string
2. Returns a `new string` , without modifying the original string

```jsx
let newPhrase = 'A whole new world';

console.log(newPhrase.slice(2));
> 'whole new world'

console.log(newPhrase.slice(2, 11));
> 'whole new'

console.log(newPhrase);
> 'A whole new world'
```

1. It can takes more than one argument.

- .replace(args)
1. It takes two arguments, the first being what you want to replace, and the second one for what you want to be replaced.

```jsx
let anotherPhrase = 'i\'m learning python';

console.log(anotherPhrase.replace('python', 'javascript'));
> 'i\'m learning javascript'
```

1. Only acts on the first occurrence.

# Learn with Challenges

## 6 kyu - bread sandwiches

```javascript
function slicesToName(n) {
  if(n <= 1 || !n || typeof n !== typeof 3) return null;
  
  let slices = []
  
  if(n % 2 !== 0) {
    slices.push('bread');
    for(let i = 1; i < n - 1; i += 2) {
      slices.push('sandwich')
    } 
  } else {
    for(let i = 0; i < n - 1; i += 2) {
      slices.push('sandwich')
    } 
  }
  
  return slices.join(' ')
}

function nameToSlices(name) {
  let slices = name.toString().split(' ');
  let numOfSlices = 0;
  
  if(typeof name !== typeof 'string' || !name || slices.length <= 1) return null;
  
  if(slices[0] === 'bread') {
      numOfSlices += 1;
      for(let i = 1; i < slices.length; i++) {
        if(slices[i] === 'sandwich') {
          numOfSlices += 2;
        } else {
          return null
        }
    }
  } else {
    for(let i = 0; i < slices.length; i++) {
      if(slices[i] === 'sandwich') {
        numOfSlices += 2;
      } else {
        return null
      }
    }
  }
  
  return numOfSlices;
}
```