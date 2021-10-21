//count syllables in a row:
const countSyllables = (word: string) => {
  const lowerCased = word.toLowerCase();
  const baseSyllables = lowerCased.match(/[aąeęiouóy]/g) || [];
  const exeptions = lowerCased.match(/[aąeęiouóy][aąeęiouóy]/g) || [];
  return baseSyllables.length - exeptions.length;
};

//check if str has 5-7-5 syllable pattern:
const haikuValidator = (str: string) => {
  const [line1, line2, line3] = str.split('\n');
  if (
    countSyllables(line1) === 5 &&
    countSyllables(line2) === 7 &&
    countSyllables(line3) === 5
  ) {
    return true;
  } else return false;
};

export { haikuValidator };
