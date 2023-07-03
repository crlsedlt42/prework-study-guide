var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[(Math.random()* topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopics() {
    if (randomTopic === "HTML") {
        console.log("Let's Study HTML!");
    } else if (randomTopic === "CSS") {
        console.log("Let's Study CSS!");
    } else if (randomTopic === "JavaScript") {
        console.log("Let's Study JavaScript!");
    } else {
        console.log("Please Try Again!");
    }
}

console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study First?");
selectTopics();









// var shapes = ["triangle", "square", "pentagon", "circle"];
// // console.log(shapes[0]);

// // //A for loop contains the following three important statements: The first statement determines the starting point for our loop.
// // //Since we want to start at the beginning of the array, we declare a variable x and give it a value of 0 (because the first index of an array is always 0), as shown in the following line of code:
// // //var x = 0;

// // //The second statement is the condition. As long as the number in the variable x is less than the length of the array, the loop will keep running.
// // //This will allow the loop to execute one time for each item in the array. We use the length built-in array property on our shapes array to express that condition, as shown in the following line of code:
// // x < shapes.length;

// // //•	The final statement is what allows the array to iterate over each item. Since indices follow a predictable pattern, we know the number increases by 1 each time.
// // //The code x++ is a shortcut way of writing x+1. Now every time the code loops, x will increase by 1, as shown in the following line of code:
// // x++

// for (var x = 0; x < shapes.length; x++) {
//     console.log(shapes[x]);
// }