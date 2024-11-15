// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

export const validatePin = (pin: string): boolean => {
  if (pin.length !== 4 && pin.length !== 6) return false;

  //   Checking that every character inside pin is a number
  for (let digit of pin) {
    if (Number.isNaN(parseInt(digit))) return false;
  }
  return true;
};
