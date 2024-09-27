
/**
 * Converts a camelCase string to a human-readable format.
 * @param {string} str - The camelCase string to be converted.
 * @returns {string} - The string converted into human-readable format with proper spacing and capitalization.
 */
export const camelToHumanReadable = (str: string): string =>
    typeof str === 'string'
      ? str
          // Insert a space before any lowercase letter followed by an uppercase letter
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          // Insert a space before a sequence of uppercase letters that ends with a lowercase letter
          .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1 $2')
          // Insert a space between sequences of numbers or uppercase letters followed by an uppercase and lowercase letter pair
          .replace(/([0-9]+|[A-Z]+)([A-Z][a-z])/g, '$1 $2')
          // Insert a space between lowercase letters and numbers
          .replace(/([a-z])([0-9]+)/g, '$1 $2')
          // Split the string by spaces, then map over the words
          .split(' ')
          .map((word) =>
            // Keep acronyms in uppercase and capitalize the first letter of other words
            word.toUpperCase() === word
              ? word
              : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          // Join the words back into a single string
          .join(' ')
          // Replace multiple consecutive spaces with a single space
          .replace(/ +/g, ' ')
      : ''; // If the input is not a string, return an empty string