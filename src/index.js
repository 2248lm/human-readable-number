module.exports = function toReadable (number) {
  
  if (number < 1) return "zero";
  let ones, tens, teens, num;

  function changeOnes(x) {
    switch(x) {
      case 1: ones = "one"; break;
      case 2: ones = "two"; break;
      case 3: ones = "three"; break;
      case 4: ones = "four"; break;
      case 5: ones = "five"; break;
      case 6: ones = "six"; break;
      case 7: ones = "seven"; break;
      case 8: ones = "eight"; break;
      case 9: ones = "nine"; break;
    }
    return ones;
  }
  function changeTens(x) {
    switch(x) {
      case 1: tens = "ten"; break;
      case 2: tens = "twenty"; break;
      case 3: tens = "thirty"; break;
      case 4: tens = "forty"; break;
      case 5: tens = "fifty"; break;
      case 6: tens = "sixty"; break;
      case 7: tens = "seventy"; break;
      case 8: tens = "eighty"; break;
      case 9: tens = "ninety"; break;
    }
    return tens;
  }
  function changeTeens(x) {
    switch(x) {
      case 11: teens = "eleven"; break;
      case 12: teens = "twelve"; break;
      case 13: teens = "thirteen"; break;
      case 14: teens = "fourteen"; break;
      case 15: teens = "fifteen"; break;
      case 16: teens = "sixteen"; break;
      case 17: teens = "seventeen"; break;
      case 18: teens = "eighteen"; break;
      case 19: teens = "nineteen"; break;
    }
    return teens;
  }

  function checkNumber(n) {
    if (n < 10) {
      changeOnes(n);
      num = ones;
    }
    else {
      if (n > 10 && n < 20) {
        changeTeens(n);
        num = teens;
      }
      else {
        tens = changeTens(Math.trunc(n / 10))
        if (n % 10 === 0) {
          num = tens;
        }
        else {
          changeOnes(n % 10);
          num = `${tens} ${ones}`;
        }
      }
    }
    return num;
  }

  if (number < 100) {
    checkNumber(number);
    number = num;
  }
  else if (number < 1000) {
    changeOnes(Math.trunc(number / 100));
    let hundreds = ones;
    if (number % 100 === 0) {
      number = `${hundreds} hundred`;
    }
    else {
      checkNumber(number % 100);
      number = `${hundreds} hundred ${num}`;
    }
  }
  return number;
}
