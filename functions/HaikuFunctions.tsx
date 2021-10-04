const countWordSyllables = (word: string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'ó', 'ą', 'ę'];
  const lowerCased = word.toLowerCase();
  const baseSyllables = word.match(/[...vowels]/g)?.length;
  const exeptions = word.match(/[ie,iu]/g)?.length;
  const result =
    baseSyllables && exeptions ? baseSyllables - exeptions : baseSyllables;
  return result;
};

const countLineSyllables = (line: string) => {};

const haikuValidator = (str: string) => {
  const [line1, line2, line3] = str.split('\n');
};

export { haikuValidator };
