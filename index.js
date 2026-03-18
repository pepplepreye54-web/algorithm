function sumOfDistinct(arr1, arr2) {
    let sum = 0;

    // Process first array
    for (let i = 0; i < arr1.length; i++) {
        let isDuplicate = false;

        // Check if already appeared earlier in arr1
        for (let j = 0; j < i; j++) {
            if (arr1[i] === arr1[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            sum += arr1[i];
        }
    }

    // Process second array
    for (let i = 0; i < arr2.length; i++) {
        let isDuplicate = false;

        // Check duplicate inside arr2
        for (let j = 0; j < i; j++) {
            if (arr2[i] === arr2[j]) {
                isDuplicate = true;
                break;
            }
        }

        // Check if exists in arr1
        for (let k = 0; k < arr1.length; k++) {
            if (arr2[i] === arr1[k]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            sum += arr2[i];
        }
    }

    return sum;
}

// Example
let A = [1, 2, 3, 4];
let B = [3, 4, 5, 6];

console.log(sumOfDistinct(A, B)); // Output: 21