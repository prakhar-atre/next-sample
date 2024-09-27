import '@testing-library/jest-dom';

import { camelToHumanReadable } from '../../../src/utils/helper';

describe('camelToHumanReadable', () => {
  it('returns empty string if null/undefined passed', () => {
    expect(camelToHumanReadable(null)).toBe('');
    expect(camelToHumanReadable(undefined)).toBe('');
  });

  it('converts camelCase to human readable', () => {
    expect(camelToHumanReadable('camelCase')).toBe('Camel Case');
  });

  it('handles strings with multiple camelCase words', () => {
    expect(camelToHumanReadable('multipleCamelCaseWords')).toBe('Multiple Camel Case Words');
  });

  it('handles single words', () => {
    expect(camelToHumanReadable('word')).toBe('Word');
  });

  it('handles empty strings', () => {
    expect(camelToHumanReadable('')).toBe('');
  });

  it('handles strings with consecutive uppercase letters', () => {
    expect(camelToHumanReadable('PDFFile')).toBe('PDF File');
  });

  it('handles camelCase acronyms', () => {
    expect(camelToHumanReadable('parseHTMLAndCSS')).toBe('Parse HTML And CSS');
  });

  it('handles strings with numbers and special characters', () => {
    expect(camelToHumanReadable('version1Point2')).toBe('Version 1 Point 2');
  });

  it('handles strings that start with an uppercase letter', () => {
    expect(camelToHumanReadable('CamelCaseString')).toBe('Camel Case String');
  });

  it('handles strings with leading or trailing spaces', () => {
    expect(camelToHumanReadable(' leadingSpace')).toBe(' Leading Space');
    expect(camelToHumanReadable('trailingSpace ')).toBe('Trailing Space ');
  });
});
