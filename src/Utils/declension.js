// Склонение слов в зависимости от числа
const declension = (amount, wordForms) => {
  let word = wordForms['11-14'];
  // Один
  if (amount % 10 === 1) {
    word = wordForms['1'];
  }
  // От двух до четырех
  if (amount % 10 > 1 && amount % 10 < 5) {
    word = wordForms['2-4'];
  }
  // От одиннадцати до четырнадцати
  if (amount % 100 > 10 && amount % 100 < 15) {
    word = wordForms['11-14'];
  }
  return word;
};

export default declension;
