import { Word } from "@/types/Word";

export const CompareWord = (searchWord: string, wordObj: Word): number => {
    // Ensure both strings are in the same case and trimmed
    const trimmedSearchWord = searchWord.trim().toLowerCase();
    const trimmedWordVariant = wordObj.variant.trim().toLowerCase();

    const compareAt = (index: number): number => {
        if (index >= Math.min(trimmedSearchWord.length, trimmedWordVariant.length)) {
            if (trimmedSearchWord.length < trimmedWordVariant.length) {
                console.log("Before");
                return -1;
            } else if (trimmedSearchWord.length > trimmedWordVariant.length) {
                console.log("After");
                return 1;
            }
            console.log("Match");
            return 0; // Words are equal
        }

        const searchCharCode = trimmedSearchWord.charCodeAt(index);
        const wordCharCode = trimmedWordVariant.charCodeAt(index);

        if (searchCharCode < wordCharCode) {
            console.log("Before");
            return -1;
        } else if (searchCharCode > wordCharCode) {
            console.log("After");
            return 1;
        }

        return compareAt(index + 1);
    };

    return compareAt(0);
};



export const CompareString = (searchWord: string, s: string): number => {
    // Recursive helper function
    const compareAt = (index: number): number => {
        // Base case: if all characters up to the minLength have been compared
        if (index >= Math.min(searchWord.length, s.length)) {
            // Decide based on length if all compared characters are equal
            if (searchWord.length < s.length) {
                console.log("Before");
                return -1;
            } else if (searchWord.length > s.length) {
                console.log("After");
                return 1;
            }
            console.log("Match");
            return 0; // Words are equal
        }

        const searchCharCode = searchWord.charCodeAt(index);
        const wordCharCode = s.charCodeAt(index);

        if (searchCharCode < wordCharCode) {
            console.log("Before");
            return -1; // searchWord comes before wordObj.variant
        } else if (searchCharCode > wordCharCode) {
            console.log("After");
            return 1; // searchWord comes after wordObj.variant
        }

        // If characters are equal, move to the next character
        return compareAt(index + 1);
    };

    // Start the recursive comparison from the first character
    return compareAt(0);
};