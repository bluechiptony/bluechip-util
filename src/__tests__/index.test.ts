import { sumNumbers } from '../index';

describe('Base test', () => {
  it('Should sum 2 numbers', () => {
    expect(sumNumbers(1, 2)).toBe(3);
  });
});
