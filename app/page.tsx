import { Search } from '@/components/BinarySearch/Search';
import { Word } from '@/types/Word';
import { promises as fs } from 'fs';



export default async function Home() {

  const csvContent = await fs.readFile(process.cwd() + "/data/ddo_fullforms_2023-10-11.csv", 'utf8');
  const lines = csvContent.split('\n');
  
  const globalArrayOfWords: Word[] = lines.map((line) => {
    const cells = line.split('\t');
    return {
      variant: cells[0],
      headWord: cells[1],
      homoGraph: cells[2],
      partOfSpeech: cells[3],
      id: Number(cells[4])
    };
  });

  for (let i = 0; i < 10; i++) {
    globalArrayOfWords && globalArrayOfWords.length > 0 && 
    console.log(globalArrayOfWords[i])
  }

  console.log(globalArrayOfWords.length)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Search globalArrayOfWords={globalArrayOfWords}  />
      </div>
    </main>
  );
}
