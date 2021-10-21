//word syllables:
const countSyllables = (word: string) => {
  const lowerCased = word.toLowerCase();
  const baseSyllables = lowerCased.match(/[aąeęiouóy]/g) || [];
  const exeptions = lowerCased.match(/[aąeęiouóy][aąeęiouóy]/g) || [];
  const result = baseSyllables.length - exeptions.length;
  return result || 1;
};

//line syllables:
const lineSyllables = (line: string) => {
  let sum = 0;
  line.split(' ').forEach((word) => {
    sum += countSyllables(word);
  });
  return sum;
};

//check if str has 5-7-5 syllable pattern:
const haikuValidator = (str: string) => {
  const [line1, line2, line3] = str.split('\n');
  const one = line1 ? lineSyllables(line1) : '?';
  const two = line2 ? lineSyllables(line2) : '?';
  const three = line3 ? lineSyllables(line3) : '?';

  if (one === 5 && two === 7 && three === 5) {
    return { isHaiku: true };
  } else return { isHaiku: false, pattern: `${one}-${two}-${three}` };
};

export { haikuValidator };
