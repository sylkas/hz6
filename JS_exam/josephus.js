function josephus(array, count) {
    // Return store
    const store = [];

    // Counter for each time the element should be spliced
    let counter = 0;

    // Array index position
    let index = 0;
    while (array.length > 0) {
        // This is because 'array' is treated like a circular array
        index = index % array.length;
        if (++counter === count) {
            // Remove the element from the array and push onto the store.
            // The first element is used, hence [0]
            store.push(array.splice(index, 1)[0]);

            // Reset the counter
            counter = 0;

            // Move back one index value
            index--;
        }
        index++;
    }

    return store;
}

// Example

//console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));
//console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 2));