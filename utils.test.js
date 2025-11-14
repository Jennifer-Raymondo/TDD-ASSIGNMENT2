// utils.test.js
const utils = require('./utils');

describe('utils — concise matcher examples', () => {
beforeAll(() => {
jest.useFakeTimers();
jest.setSystemTime(new Date('2020-01-01T00:00:00Z'));
});
afterAll(() => jest.useRealTimers());

test('Exact equality — sum', () => {
expect(utils.sum(2, 2)).toBe(4);
});

test('Deep equality — createUser returns expected object', () => {
expect(utils.createUser('Jennifer', 30)).toEqual({
name: 'Jennifer',
age: 30,
createdAt: new Date('2020-01-01T00:00:00Z'),
});
});

test('Negation — sum is not wrong value', () => {
expect(utils.sum(1, 1)).not.toBe(3);
});

test('Truthiness — presence and absence', () => {
expect(utils.findInArray([1, 2, 3], 2)).toBeTruthy();
expect(utils.findInArray([1, 2, 3], 4)).toBeFalsy();
});

test('Number matchers — comparisons & floating point', () => {
expect(utils.sum(2, 3)).toBeGreaterThanOrEqual(5);
// use toBeCloseTo for floating point artifacts
expect(utils.approximateDivision(0.3, 0.1)).toBeCloseTo(3, 5);
});

test('String & array matchers', () => {
const user = utils.createUser('Jenny', 30);
expect(JSON.stringify(user)).toMatch(/Jenny/);
expect([1, 2, 3]).toContain(2);
});

test('Exceptions — parseJSON', () => {
expect(() => utils.parseJSON()).toThrow('No JSON string provided');
expect(() => utils.parseJSON('not-json')).toThrow();
});
});