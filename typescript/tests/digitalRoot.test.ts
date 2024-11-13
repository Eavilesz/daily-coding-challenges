import { digitalRoot } from '../challenges/digitalRoot';

describe('digitalRoot', () => {
  test('it returns the proper value with a single sum operation', () => {
    expect(digitalRoot(16)).toBe(7);
  });

  test('it returns the proper value with two sum operations', () => {
    expect(digitalRoot(942)).toBe(6);
  });

  test('it returns the proper value with more than two recursive sum operations', () => {
    expect(digitalRoot(493193)).toBe(2);
  });
});
