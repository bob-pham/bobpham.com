
let today = new Date();

function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function getVal(items, key, index) {
    if (key === 0) { // sort by score
        return items[index]["score"];
    } else {
        return items[index]["dateEnd"] === "Present" ? today : new Date(items[index]["dateEnd"]);
    }
}

function partitionScore(items, left, right) {
    let pivot = getVal(items, 0, [Math.floor((right + left) / 2)]) //middle element
    let i = left; //left pointer
    let j = right; //right pointer

    while (i <= j) {
        while (getVal(items, 0, i) < pivot) {
            i++;
        }
        while (getVal(items, 0, j) > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

function partitionDate(items, left, right) {
    let pivot = getVal(items, 1, [Math.floor((right + left) / 2)]) //middle element
    let i = left; //left pointer
    let j = right; //right pointer

    while (i <= j) {
        while (getVal(items, 1, i) > pivot) {
            i++;
        }
        while (getVal(items, 1, j) < pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, key, left, right) {
    let index;
    if (items.length > 1) {
        
        index = key === 0 ? partitionScore(items, left, right) : partitionDate(items, left, right); //index returned from partition

        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, key, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, key, index, right);
        }
    }
    return items;
}

export default quickSort;