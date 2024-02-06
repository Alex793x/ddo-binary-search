import { Word } from "@/types/Word";

export const BinarySearch = <T, R>( guess: T, options: R[], compare: (a: T, b: R) => number, start: number, end: number ): number => {
    if (options.length === 0) {
        console.log("No elements in array")
        return -1;
    } else if (start > end) {
        console.log("Word not found!")
        return -1;
    }

    let middle = Math.floor(start + (end - start) / 2);
    console.log((options[middle] as Word).variant)
    const comparisonResult = compare(guess, options[middle]);
    if (comparisonResult === 0) {
        console.log(middle)
        return middle;
    } else if (comparisonResult > 0) {
        return BinarySearch(guess, options, compare, (middle + 1), end);
    } else {
        return BinarySearch(guess, options, compare, start, (middle - 1));
    }
};

export default BinarySearch;
