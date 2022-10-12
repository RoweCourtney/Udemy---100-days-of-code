// ____________________ Operators ____________________
// Addition (+)
// Subtraction (-)
// Multiply (*)
// Divide (/)
// Equals or Assignment (=) 
// Comparison: Type Coercion (==) 
//    ie: 5 =="5" is True _ One or the other will be coerced into being the same as the other.
// Comparison: Strict Equality (===) 
//    ie: 5 ==="5" is False _ Both must be the exact same.
// Modulo (%)
// And (&&)
// Or (||)
// Greater than (>) Greater than or Equal (>=)
// Less than (<) Less than or Equal (<=)

// ____________________ Data Types in Variables ____________________
// Undefined:
    // let y;

// Numbers:
    let x = 5;
    let y = 2;
    let pi = 3.14;

// Booleans: true / false
    let a = true;
    
    y = 5 
    x == y  // true
    x === y // true

// Strings: 
    let name = "Courtney";



// Arrays:
    let array = [0,1,2,3,4,5,6,7,8,9];
    array = [];
    
    let array1 = [];
    let array2 = [];

// ____________________ For Loops ____________________

    for (var i = 0; i < 101; i++) {
        array[i] = i;
    };

    for (var i = 0; i <= 100; i++) {
        array1[i] = i;
    };

    for (var i = 0; i <= 100; i++) {
        array2[i] = (100 - i);
    };

    console.log(array);

// ____________________ While loops ____________________


// ____________________ Objects ____________________


// ____________________ Functions ____________________








// __________ Udemy 100 days of code exercise __________
let courseName = "Udemy 100 days of code";
let coursePrice = 20
let courseGoals = ["Html", "Css", "Javascript"];

alert(courseName);
alert(coursePrice);
alert(courseGoals);

        let onlineCourse = {name: courseName,
                            price: coursePrice,
                            goals: courseGoals };

        alert(onlineCourse.name);
        alert(onlineCourse.price);
        alert(onlineCourse.goals);

alert(courseGoals[1]);  or alert(onlineCourse.goals[1]);

        function getListItem(array, arrayIndex) {
            let arrayElement = array[arrayIndex];
            return arrayElement;
        };

        let firstGoal = getListItem(onlineCourse.goals, 0);
        alert(firstGoal);




