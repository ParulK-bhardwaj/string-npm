[![npm version](https://img.shields.io/npm/v/string-in-js.svg)](https://www.npmjs.com/package/string-in-js)

[![npm downloads](https://img.shields.io/npm/dt/string-in-js.svg)](https://www.npmjs.com/package/string-in-js)

[NPM Package](https://www.npmjs.com/package/string-in-js)

# string-in-js npm package

The string-in-js npm package provides string manipulation functions designed to enhance JavaScript's built-in string capabilities. It provides a set of intuitive functions that allow you to easily transform and manipulate strings in various ways.

## Installation

To start using string-in-js in your JavaScript projects, you can install it via npm:

```shell
npm install string-in-js
```

## Usage
Once you have installed string-in-js, you can import the desired functions into your JavaScript code:

```javascript
const stringJS = require('string-in-js');
```

OR

```javascript
const {
    capitalizeString,
    titleizeString,
    camelizeString,
    underscoreString,
    dasherizeString,
    kebabizeString,
    humanizeString,
} = require('string-in-js');
```

## Features
string-in-js offers a wide range of features that empower you to work with strings more effectively:

- Capitalization: Convert the first character of a string to uppercase using the capitalizeString function.
- Title Case: Transform a string by capitalizing the first character of each word with the titleizeString function.
- Camel Case: Convert a string to camel case by removing underscores and capitalizing the following character using the camelizeString function.
- Snake Case: Transform a string to snake case by inserting underscores between words and making it lowercase with the underscoreString function.
- Kebab Case: Convert a string to kebab case by replacing underscores with dashes using the dasherizeString function.
- Custom Kebabization: Apply custom kebabization rules by replacing non-alphabetic characters with dashes using the kebabizeString function.
- Humanization: Convert an underscored or dasherized string to a human-readable form using the humanizeString function.

## Functions and Examples
string-in-js provides the following functions for string manipulation:

### capitalizeString(string)
Converts the first character of a string to uppercase.

Example:

```javascript
const { capitalizeString } = require('string-in-js');

console.log(capitalizeString('hello')); // Output: Hello
console.log(capitalizeString('world')); // Output: World
```

### titleizeString(string)

Converts the first character of each word in a string to uppercase.

Example:

```javascript
const { titleizeString } = require('string-in-js');

console.log(titleizeString('hello world')); // Output: Hello World
console.log(titleizeString('the quick brown fox')); // Output: The Quick Brown Fox
```

### camelizeString(string)

Converts a string to camel case by removing underscores and capitalizing the following character.

Example:

```javascript
const { camelizeString } = require('string-in-js');

console.log(camelizeString('some_variable_name')); // Output: someVariableName
console.log(camelizeString('another_string')); // Output: anotherString
```

### underscoreString(string)

Converts a string to snake case by inserting underscores between words and making it lowercase.

Example:

```javascript
const { underscoreString } = require('string-in-js');

console.log(underscoreString('helloWorld')); // Output: hello_world
console.log(underscoreString('anotherExampleString')); // Output: another_example_string
```

### dasherizeString(string)

Converts a string to kebab case by replacing underscores with dashes.

Example:

```javascript
const { dasherizeString } = require('string-in-js');

console.log(dasherizeString('hello_world')); // Output: hello-world
console.log(dasherizeString('another_example_string')); // Output: another-example-string
```

### kebabizeString(string)

Converts a string to kebab case by replacing non-alphabetic characters with dashes.

Example:

```javascript
const { kebabizeString } = require('string-in-js');

console.log(kebabizeString('Hello World')); // Output: hello-world
console.log(kebabizeString('Some String, Here')); // Output: some-string--here
```

### humanizeString(string)

Converts an underscored or dasherized string to a human-readable form.

Example:

```javascript
const { humanizeString } = require('string-in-js');

console.log(humanizeString('hello_world')); // Output: Hello world
console.log(humanizeString('hel--/;[]][]#$#$lo #$#wo#$#rl#$#d')); // Output: Hel lo wo rl d

```

## Contributing
I welcome contributions from the community to improve and expand the functionality of string-in-js. If you have any suggestions, bug reports, or feature requests, please don't hesitate to open an issue or submit a pull request on the GitHub repository.

### 
- The package is intended to be used for educational purposes only.
