// 2000

const units = [1000, 100, 10, 1];

const numbersToText: Record<number, string> = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const texts = ["thousand", "hundred"];

const decims: Record<number, string> = {
  9: "ninety",
  8: "eighty",
  7: "seventy",
  6: "sixty",
  5: "fifty",
  4: "fourty",
  3: "thirty",
  2: "twenty",
};

const convertNumberToText = (
  num: number,
  unitIdx: number,
  text: string
): string => {

  if (unitIdx === units.length) {
    return text;
  }

  const unit = units[unitIdx];
  const n = Math.floor(num / unit); 

  if (n === 0) {
    return convertNumberToText(num % unit, unitIdx + 1, text);
  }

  if (unit === 1) {    
    text += ` ${numbersToText[n]}`;    
  } else if (unit === 10) {
    if(n ===1) {
      return convertNumberToText(num, unitIdx + 1, text)
    }

    text += text ? " and" : "";
    text += `  ${decims[n]}`;        

  } else {
    text += ` ${numbersToText[n]} ${texts[unitIdx]}`;
  }

  return convertNumberToText(num % unit, unitIdx + 1, text);  
};

const text = convertNumberToText(1200, 0, "");
console.log("🚀 ~ text:", text);
