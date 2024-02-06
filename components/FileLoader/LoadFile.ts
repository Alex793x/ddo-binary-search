import { Word } from '@/types/Word';
import { promises as fs } from 'fs';

export const GlobalArrayOfWords = async () => {
    const csvContent = (await fs.readFile(process.cwd() + "/data/ddo_fullforms_2023-10-11.csv", 'utf8'));
    const lines = csvContent.split('\n');

    const globalArrayOfWords: Word[] = lines.map((line) => {
        const cells = line.trim().split('\t');

        return {
            variant: cells[0],
            headWord: cells[1],
            homoGraph: cells[2],
            partOfSpeech: cells[3],
            id: Number(cells[4])
        };
    });
    

    return globalArrayOfWords.sort((a, b) => a.variant.localeCompare(b.variant));
}