Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

Parameter: separator(optional)

Return: A string with all array elements joined.

Example:

```js
let colors = [`red`, `white`, `blue`, `black`]
colors.join();
//'red,white,blue,black'
colors.join([])
//'redwhiteblueblack'
colors.join(` `)
//'red white blue black'
colors.join(`-`)
//'red-white-blue-black'
```

`join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
- No it does not mutate the original array.

3. `flat`

Parameter: depth (optional)

- Return: A new array with the sub-array elements concatenated into it.

- Example:

```js
 let numbers = [1, 2, [3, 4, [5, 6]]];
numbers.flat(); //[1,2,3,4, Array(2)]
numbers.flat(0); //[1,2, Array(3)]
numbers.flat(6); //[1,2,3,4,5,6]      
 ```

The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

No it does not mutate the original array.

4. `push`

Parameter: elementN

Return: The new length property of the object upon which the method was called.

Example:

```js
 let numbers = [1, 2, 3];
numbers.push(4); // 4
let sentanceArray = 'A quick brown fox jumped over a lazy';
sentanceArray.push('dog') ; // 2
let colors = ['red', 'green', 'blue'];
colors.push('black', 'red', 21, true); //  7
 ```

The push() method adds one or more elements to t - he end of an array and returns the new length of t - he array.

It mutates the original array.

5. `indexOf`

Parameter: searchElement, fromIndex -Optional

Return: The first index of the element in the array; -1 if not found

Example:

```js
 let numbers = [1, 2, 3];
numbers.indexOf(3); // 2 
let sentanceArray = ['A quick brown fox jumped over a lazy'];
sentanceArray.indexOf('dog'); // -1
let colors = ['red', 'green', 'blue'];
colors.indexOf('red'); // 0
colors.indexOf('green'); // 1
colors.indexOf('blue'); // 2
 ```

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

No it does not mutate the original array.

6. `lastIndexOf`

Parameter: searchElement, fromIndex Optional

Return: The last index of the element in the array; -1 if not found.

Example:

```js
 let numbers = [1, 2, 3];
numbers.lastIndexOf(3); // 2 
let sentanceArray = ['A quick brown fox jumped over a lazy'];
sentanceArray.lastIndexOf('dog'); // -1
let colors = ['red', 'green', 'blue'];
colors.lastIndexOf('red'); // 0
colors.lastIndexOf('green'); // 1
colors.lastIndexOf('blue'); // 2
 ```

The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

No it does not mutate the original array.

7. `includes`

Parameter: The value to search for.

Return: returning true or false if it present in the array.

Example:

```js
let numbers = [1, 2, 3];
numbers.includes(2); // true
let sentanceArray = ['A quick brown fox jumped over a lazy' ];
sentanceArray.includes('dog'); // false
let colors = ['red', 'green', 'blue'];
colors.includes('green' ); //  true
colors.includes('black' ); //  false
```

includesThe includes() method determines whether an array includes a certain element, returning true or false as appropriate.

No it does not mutate the original array

8. `reverse`

Parameter: It accepts no parameter.

Return: Returns the reversed array.

Example:

```js
let numbers = [1, 2, 3];
numbers.reverse(); //[3, 2, 1]
let colors = ['red', 'green', 'blue'];
colors.reverse(); // ['blue', 'green', 'red']
```

reverse The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

Yes it mutate the original array

9. `every`

Parameter:The every() method tests whether all elements in the array pass the test implemented by the provided function.

Return: if the callbackFn function returns a truthy value for every array element. Otherwise, false.

Example:

```js
let numbers = [1, 2, 3];
let check = numbers.every(
  function(number){
     return number > 0;
  }
) 
console.log(check) // true

let numbers = [1, 2, 3]; let check = numbers.every( function(number){ return number > 2; } )
 console.log(check) // false
```

`every` The every() method tests whether all elements in the array pass the test implemented by the provided function.

No it does not mutate the original array

10. `shift`

Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)

Return: a single Array consisting of by all the values passed as parameters in the same order.

Example:

```js
let numbers = [1, 2, 3];
numbers.concat(4); //[1,2,3,4]
let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
let colors = ['red', 'green', 'blue'];
colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
```

concat accepts n number of values and returns one array with all the values in same order. It does not change the original array.

No it does not mutate the original array

11. `splice`

Parameter:accept callback function which accept 4 parameters

Return: new array of each element resulted from callback function

Example:

```js
let colors = ["black", "blue", "brown", "green"];
ler allColors = "";
colors.forEach(forEachColor);
function forEachColor(color){
  allColor += color + " ";
}
console.log(allColors);
```

map it takes call back function and execute each element for callback function.

No it does not mutate the original array

12. `find`

Parameter: accept callback function which accept 4 parameters

Return: new array containing extracted array

Example:

```js
let colors=['blue','yellow','red','gray'];
function isFound(color){ return color==='red'; } } colors.find(isFound); // 'red' let numbers =[1,2,3,4,5,6]; numbers.find(isFound);// undefined
```

- `find` it takes call back function if that function returns true then only it will print that element otherwise undefined.
- No it does not mutate the original array

13. `unshift`

Parameter: (elements)- The elements to add to the front of the arr.

Return: The new length property of the object upon which the method was called.

Example:

```js
   let arr = [4, 5, 6];

   arr.unshift(1, 2, 3);
   console.log(arr);
   // [1, 2, 3, 4, 5, 6]

   arr = [4, 5, 6]; // resetting the array

   arr.unshift(1);
   arr.unshift(2);
   arr.unshift(3);

   console.log(arr);
   // [3, 2, 1, 4, 5, 6]

   let arr = [1, 2];

   arr.unshift(0); // result of the call is 3, which is     the new array length
   // arr is [0, 1, 2]

   arr.unshift(-2, -1); // the new array length is 5
   // arr is [-2, -1, 0, 1, 2]

   arr.unshift([-4, -3]); // the new array length is 6
   // arr is [[-4, -3], -2, -1, 0, 1, 2]

   arr.unshift([-7, -6], [-5]); // the new array length     is 8
   // arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1,      2 ]
```

 - The `unshift()` method inserts the given values to the beginning of an array-like object.

- It mutates the original array.

14. `findIndex`

Parameter: (callback)- A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.

- element - The current element being processed in the    array.

- Index(optional) - The index of the current element      being processed in the array.

- Array (optional) - The array findIndex() was called     upon.

- thisArg - (optional) - Optional object to use  as this when executing callback.

Return: The index of the first element in the array that passes the test. Otherwise, -1.

Example:

```js
   function isPrime(num) {
     for (let i = 2; num > i; i++) {
       if (num % i == 0) {
         return false;
       }
     }
     return num > 1;
   }

   console.log([4, 6, 8, 9, 12].findIndex(isPrime)); //     -1, not found
   console.log([4, 6, 7, 9, 12].findIndex(isPrime)); //     2 (array[2] is 7)
```

The findIndex() method executes the callback function once for every index in the array until it finds the one where callback returns a truthy value.

It does not mutate the original array.

15. `filter`

Parameter: callback - Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

currentValue - The current element being processed in the array.

index (optional) - The index of the current element being processed in the array.

array (optional) - The array filter was called upon.

thisArg (optional) - Value to use as this when executing callback.

Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

Example:

```js
   let check = (val) => (val > 10 ? true : false);
let numbers = [1, 2, 3];
numbers.filter(check); //[]

let colors = [1, 232, 3, 54, 1, 3, 6, 3234, 123];
colors.filter(check); // [232,54,3234,123]
```

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

It does not mutate the original array.

16. `flat`

Parameter: (depth - optional) The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

Return: A new array with the sub-array elements concatenated into it.

Example:

```js
   let numbers = [1, [2], 3];
numbers.flat(); //[1,2,3,]

let colors = ["red", [[["green"]]], "blue"];
colors.flat(2); // ['red',['green'],'blue']
```

The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

No it does not mutate the original array.

17. `forEach`

Parameter: (function)-function to execute it on every element

Return: undefined.

Example:

```js
let add = (value) => console.log((value += 1));
let numbers = [1, 2, 3];
numbers.forEach(add); //undefined

let colors = ["red", "green", "blue"];
colors.forEach(add); //undefined
```

forEach accepts function and run function on each element atleast once.

No it does not mutate the original array

18. `map`

Parameter: (cbFun)-used to execute it on every element

Return: New array of elements formed by executing function on every elemetn at a time..

Example:

```js
let add = (value) => (value += 1);

let numbers = [1, 2, 3];
numbers.map(add); //[2,3,4]

let colors = ["red", "green", "blue"];
colors.map(add); // ['red1','green1','blue1']
```

map accepts callback function and return new array of elements returned by executing function on each elemetn of array.

No it does not mutate the original array

19. `pop`

Parameter: no parameter

Return: element which is at last of array.

Example:

```js
let numbers = [1, 2, 3];
numbers.pop(); // 3

let colors = ["red", "green", "blue"];
colors.pop(); // "blue"
```

pop it return the last element of given array by removing it and changing original array..

Yes, it mutate the original array

20. `reduce`

Parameter: (function)-function is used to reduce array,(initialVal:optiona:default:0)-used by function to calculate.

Return: single value get by running function.

Example:

```js
let addAll = (acc, curr) => acc + curr;
let numbers = [1, 2, 3];
numbers.reduce(addAll, 0); //6

numbers.reduce(addAll, 10); //16
```

reduce accepts parameter and initial value and return single value produced by ececuting function.

No it does not mutate the original array

21. `slice`

Parameter: (initialIndex)-the index from which to select elements of new array.(count:optional:default:arr.length)

Return: new array of elements selected from original array

Example:

```js
let numbers = [1, 2, 3];
numbers.slice(1, 1); //[2]

let colors = ["red", "green", "blue", "black", "red", 21, true];
colors.slice(3, 3); // ['black', 'red', 21]
```

slice accepts initial index and count and return new array of elements selected from original array.

No it does not mutate the original array

22. `some`

Parameter: (cbFunc)-function to run test on each element

Return:true of atleast one element from array pass the test run by function or false if no one pass test.

Example:

```js
let isEven = (val) => (val % 2 === 0 ? true : false);
let numbers = [1, 5, 3];
numbers.some(isEven); //false

let colors = [1, 2, 3, 5, 7];
colors.some(isEven); // true
```

some accepts function and return true if atleast one element of array pass the test run by function otherwise return false.

No it does not mutate the original array