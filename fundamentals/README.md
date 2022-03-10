# Table of Content

- [Table of Content](#table-of-content)
  - [Data Types](#data-types)
  - [Functions](#functions)
    - [Function Declaration](#function-declaration)
    - [Function Expression](#function-expression)
      - [Arrow Function](#arrow-function)
  - [Control Flow](#control-flow)
    - [Conditional](#conditional)
      - [If, Else if, Else](#if-else-if-else)
    - [Loops](#loops)
      - [For Loop](#for-loop)
      - [While Loop](#while-loop)
      - [Do-While Loop](#do-while-loop)

## Data Types

| Data Type |                                                                                   | Example                           |
| :-------: | :-------------------------------------------------------------------------------- | :-------------------------------- |
|  Number   | Represents both integer and floating pointing numbers                             | `let n = 123;`                    |
|  BigInt   | "Number" type for big numbers                                                     | `const bigInt = 12312312313132n;` |
|  String   | Represents the characters                                                         | `let str = "Hello World";`        |
|  Boolean  | Has only two values `true` or `false`                                             | `let isGreater = 2 > 1;`          |
|   Null    | Represents the variable has no value, is empty                                    | `let age = null;`                 |
| Undefined | When a variable has not value assinged                                            | `let age;`                        |
|  Objects  | Special type of data type, different from above where they're called `primitives` |

## Functions

Function contains a set of instructions (determined by the programmer) which will guide the program to obtain an answer.

### Function Declaration

- With no parameters
```javascript
function sayHello() {
    console.log(`Hello World!`);
};

sayHello();
> Hello World!
```

- With parameters
```javascript
function sayHello(name) {
    console.log(`Hello ${name}`);
};

sayHello('Blue');
> Hello Blue
```

### Function Expression

Another way to create a new function in the middle of any expression.

```javascript
let sayHello = function() {
    console.log('Hello World');
};

sayHello();
> Hello World
```

Now, function is a value stored in a variable.

#### Arrow Function

Syntatic sugar for creating a function expression.

```javascript
let sayHello = () => {
    console.log("Hello World!");
};

sayHello();
> Hello World!
```

## Control Flow

JavaScript runs code from top to bottom, which means it starts from the first line and ends at the last line, unless it hits a statement that changes the control flow.

- Comparisons

|  Operators   | Meaning                     |
| :----------: | :-------------------------- |
|  `>` / `<`   | Greater/Less than           |
| `>=` / `<=`  | Greater/Less than or equals |
| `===` / `==` | Equals                      |
| `!==` / `!=` | Not equals                  |

**Boolean** is the result of any comparison.

### Conditional

Are implemented when you need to perform different actions based on different conditions.

#### If, Else if, Else

```javascript
if(2 * 2 === 4) {
    console.log('It is running!');
};

> It is running!
```

### Loops
Interation statements that keep running until a condition is matched.

#### For Loop

#### While Loop

#### Do-While Loop