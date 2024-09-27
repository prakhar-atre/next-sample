import '@testing-library/jest-dom';

import { compareWithFixedFutureDate } from '../../../src/utils/helper';

describe('compareWithFixedFutureDate', () => {
  it('should return true if the current date is before the provided future date', () => {
    // Mock a future date
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // One day in the future

    // Call the function with the future date
    const result = compareWithFixedFutureDate(futureDate);

    // Expect the result to be true
    expect(result).toBe(true);
  });

  it('should return false if the current date is after the provided future date', () => {
    // Mock a past date
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1); // One day in the past

    // Call the function with the past date
    const result = compareWithFixedFutureDate(pastDate);

    // Expect the result to be false
    expect(result).toBe(false);
  });

  it('should handle future date as string input correctly', () => {
    // Mock a future date as string
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // One day in the future
    const futureDateString = futureDate.toISOString();

    const result = compareWithFixedFutureDate(futureDateString);

    // Expect the result to be true
    expect(result).toBe(true);
  });

  it('should handle future date as number (timestamp) input correctly', () => {
    const bufferTime = 5 * 1000; // 5 seconds buffer
    const futureDateTimestamp = Date.now() + 24 * 60 * 60 * 1000 + bufferTime; // One day and 5 seconds in the future

    // Call the function with the future date timestamp
    const result = compareWithFixedFutureDate(futureDateTimestamp);

    // Expect the result to be true
    expect(result).toBe(true);
  });
});
