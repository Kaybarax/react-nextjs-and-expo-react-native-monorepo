// Tests for validateProfile utility function
import { validateProfile } from './validation';

describe('validateProfile', () => {
  it('should return success true and validated data for a valid profile', () => {
    // Arrange
    const validProfile = {
      id: '123456',
      name: 'John Doe',
      age: 30,
      bio: 'Software developer with a passion for clean code',
      location: 'New York',
      imageUrl: 'https://example.com/image.jpg',
      interests: ['coding', 'hiking', 'reading'],
      lastActive: new Date().toISOString(),
    };

    // Act
    const result = validateProfile(validProfile);

    // Assert
    expect(result.success).toBe(true);
    expect(result.data).toEqual(validProfile);
    expect(result.error).toBeUndefined();
  });

  it('should return success false and error message when id is missing', () => {
    // Arrange
    const invalidProfile = {
      name: 'John Doe',
      age: 30,
      bio: 'Software developer with a passion for clean code',
      location: 'New York',
      imageUrl: 'https://example.com/image.jpg',
      interests: ['coding', 'hiking', 'reading'],
      lastActive: new Date().toISOString(),
    };

    // Act
    const result = validateProfile(invalidProfile);

    // Assert
    expect(result.success).toBe(false);
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
    expect(typeof result.error).toBe('string');
  });

  it('should return success false and error message when imageUrl is not a valid URL', () => {
    // Arrange
    const invalidProfile = {
      id: '123456',
      name: 'John Doe',
      age: 30,
      bio: 'Software developer with a passion for clean code',
      location: 'New York',
      imageUrl: 'not-a-valid-url',
      interests: ['coding', 'hiking', 'reading'],
      lastActive: new Date().toISOString(),
    };

    // Act
    const result = validateProfile(invalidProfile);

    // Assert
    expect(result.success).toBe(false);
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
    expect(typeof result.error).toBe('string');
  });

  it('should return success false and error message for non-object input', () => {
    // Arrange
    const invalidInput = 'not an object';

    // Act
    const result = validateProfile(invalidInput);

    // Assert
    expect(result.success).toBe(false);
    expect(result.data).toBeUndefined();
    expect(result.error).toBeDefined();
    expect(typeof result.error).toBe('string');
  });
});
