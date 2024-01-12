# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jdob11/lotide`

**Require it:**

`const _ = require('@jdob11/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: function to assert if two given arrays are equal
* `assertEqual`: function to assert if two given values are equal
* `assertObjectsEqual`: function to assert that two given objects are equal
* `countLetters`: function to return the letter count of a given string
* `countOnly`: function to count occurances of specific items in an object
* `eqArrays`: function to check if two arrays are equal
* `eqObjects`: function to check if two objects are equal
* `findKey`: function to return first value of a given key
* `findKeyByValue`: function to return a key that matches given value
* `head`: function to return first value of an array
* `index`: object containing all functions of this library
* `letterPositions`: function to return the index position of a given letter
* `map`: function to return new array with value from each original array item given to callback function
* `middle`: function to return the middle element or middle most elements of an array
* `tail`: function to create an array with every element of the original array given less the first
* `takeUntil`: function to creat a new array sliced from original array to the value given to callback function
* `without`: function to return a new array less values given to remove
