import { validatePin } from '../challenges/validatePin';

describe('validatePin', () => {
  it('returns false if the pin length is different than 4 or 6', () => {
    expect(validatePin('123')).toBe(false);
    expect(validatePin('00000')).toBe(false);
    expect(validatePin('1234567')).toBe(false);
  });

  it('returns false if the pin has letters in it', () => {
    expect(validatePin('1234aa')).toBe(false);
    expect(validatePin('a234')).toBe(false);
  });
});
