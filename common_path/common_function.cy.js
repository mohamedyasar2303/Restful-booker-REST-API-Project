const getRandomNumber = () => {
    // Generate a random number between 100 and 999
    return Math.floor(Math.random() * 900) + 100;
  };

  const randomThreeDigitNumber = getRandomNumber();



  module.exports={

    three_digit_number:randomThreeDigitNumber,
  }