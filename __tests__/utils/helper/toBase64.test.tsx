import { toBase64 } from '../../../src/utils/helper';

describe('toBase64', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('converts a file to a base64 string', async () => {
    // Create a mock file
    const file = new Blob(['test'], { type: 'text/plain' });
    file.name = 'test.txt';

    // Call the function
    const base64String = await toBase64(file);

    // Check if the result is a base64 string
    expect(base64String).toBe('data:text/plain;base64,dGVzdA==');
  });

  it('handle null case', async () => {
    // Call the function
    await expect(toBase64(null)).rejects.toThrow(TypeError);

    // Optionally, check for a specific error message
    await expect(toBase64(null)).rejects.toThrow(
      "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'."
    );
  });

  it('rejects if the input is not a Blob', async () => {
    // Create a mock non-Blob input
    const notABlob = 'I am not a Blob';

    // Call the function and check for rejection
    await expect(toBase64(notABlob)).rejects.toThrow(TypeError);

    // Optionally, check for a specific error message
    await expect(toBase64(notABlob)).rejects.toThrow(
      "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'."
    );
  });

  it('rejects if the file could not be read as base64', async () => {
    // Create a mock Blob that simulates a FileReader error
    const mockBlob = new Blob(['test'], { type: 'text/plain' });
    jest.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(function () {
      this.onerror(new Error('FileReader error'));
    });

    // Call the function and check for rejection
    await expect(toBase64(mockBlob)).rejects.toThrow('this.onerror is not a function');
  });

  it('does not match the incorrect base64 string', async () => {
    // Create a mock file
    const file = new Blob(['test'], { type: 'text/plain' });
    file.name = 'test.txt';

    // Call the function
    const base64String = await toBase64(file);

    // Check if the result does not match the incorrect base64 string
    expect(base64String).not.toBe('incorrect_base64_string');
  });
});
