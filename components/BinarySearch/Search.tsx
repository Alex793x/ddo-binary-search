"use client";

import { Word } from "@/types/Word";
import { useEffect, useState } from "react";
import { CompareWord } from "@/utility/Compare";
import BinarySearch from "@/utility/BinarySearch";

type props = {
    globalArrayOfWords: Word[]
}

export const Search = ({globalArrayOfWords}: props) => {
    const [searchWord, setSearchWord] = useState("");
    const [wordsArray, setWordsArray] = useState<Word[]>([]);

    useEffect(() => {
        if (globalArrayOfWords) {
            const loadWords = async () => {
                const words = globalArrayOfWords;
                setWordsArray(words);
            };
            loadWords();
        }
    }, [globalArrayOfWords]);


    const handleSearch = async () => {
        console.log(searchWord)
        BinarySearch(searchWord, wordsArray, CompareWord, 0, globalArrayOfWords.length - 1)
        console.log(globalArrayOfWords.find(wordObj => wordObj.variant === "heste"));
    };

    return (
        <div>
            <h1>Words to Search for</h1>
            <div className='flex gap-7'>
                <input
                    type="text"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    placeholder="Enter text here..."
                />
                <button type='button' onClick={() => handleSearch()}>Search</button>
            </div>

        </div>
    )
}