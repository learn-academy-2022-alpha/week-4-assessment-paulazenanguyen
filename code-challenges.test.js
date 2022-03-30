// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe('cupidShuffle', () => {
    it('takes in an array, removes the first item from the array and shuffles the remaining content', () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

        expect(cupidShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(cupidShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))

        expect(cupidShuffle(colors1)).not.toEqual(expect.arrayContaining([colors1[-1]]))
        expect(cupidShuffle(colors2)).not.toEqual(expect.arrayContaining([colors2[-1]]))
    })
})
// ● cupidShuffle › takes in an array, removes the first item from the array and shuffles the remaining content
//
//   ReferenceError: cupidShuffle is not defined

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.
// declare your function: cupidShuffle
// parameter: array
// remove the first element using shift
//use .sort to use the math random method
const cupidShuffle = (array) => {
  let car = array.shift()
  arr = array.sort(() => Math.random() - 0.5)
return arr
}

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
// describe("highLow", () => {
//   it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
//     const nums1 = [3, 56, 90, -8, 0, 23, 6]
//     // Expected output: [-8, 90]
//     const nums2 = [109, 5, 9, 67, 8, 24]
//     // Expected output: [5, 109]
//
//     expect(highLow(nums1)).toEqual([-8, 90])
//     expect(highLow(nums2)).toEqual([5, 109])
//   })
// })
// ● highLow › takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
//
//   ReferenceError: highLow is not defined


// b) Create the function that makes the test pass.
// declare a function:
// parameter: an array
// use .filter() function to iterate through the array


// const highLow = (array) => {
//   let smallest = array[0]
//   for(i = 0; i < array.length; i++){
//     if(array[i]<smallest){
//     smallest = array[i]
//     }
//   }
// }
// // let smallest = nums[0]
// // for(let i = 0; i<nums.length; i++){
// //   if(nums[i]<smallest){
// //     smallest = nums[i]
// //   }
// // }
// // var nums = [3, 57, -9, 20, 67]
// // let highest = nums[0]
// // for(let i = 0; i<nums.length; i++){
// //   if(nums[i]>highest){
// //     highest = nums[i]
// //   }
// // }
// // I could not complete this one. I was completely stumped. I didn't know how to do two things at once. Im not sure if it was the overthinking but I just couldn't figure it out.
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
// describe("noDupes", () => {
//   it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
//     const testArray1 = [3, 7, 10, 5, 4, 3, 3]
//     const testArray2 = [7, 8, 2, 3, 1, 5, 4]
//     expect(noDupes(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
//   })
// })
// ● noDupes › takes in two arrays as arguments and returns one array with no duplicate values
//
//   ReferenceError: noDupes is not defined


// b) Create the function that makes the test pass.
// declare a function noDupes
// parameter: array1 array2 (taking two arrays as parameter)
// What are we going to do with the two arrays. --> join them (.concat())
// once the arrays are joined i will use .filter() function
// find the index of the value that is being passed
// set up an evaluation to see whether that value is equal to its index
// const noDupes = (array1, array2) => {
//   let combined = array1.concat(array2)
//   return combined.filter((value, index) =>
//   combined.indexOf(value) === index)
// }
// PASS  ./code-challenges.test.js
 // noDupes
 //   ✓ takes in two arrays as arguments and returns one array with no duplicate values (4 ms)
