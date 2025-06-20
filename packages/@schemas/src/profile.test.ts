// Import the ProfileSchema
import { ProfileSchema } from './profile';

describe('ProfileSchema', () => {
  it('should successfully parse a valid profile object', () => {
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

    // Act & Assert
    expect(() => {
      const result = ProfileSchema.parse(validProfile);
      expect(result).toEqual(validProfile);
    }).not.toThrow();
  });

  // T3007: Tests for missing or invalid data
  it('should throw an error when id is missing', () => {
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

    // Act & Assert
    expect(() => {
      ProfileSchema.parse(invalidProfile);
    }).toThrow();
  });

  it('should throw an error when name is missing', () => {
    // Arrange
    const invalidProfile = {
      id: '123456',
      age: 30,
      bio: 'Software developer with a passion for clean code',
      location: 'New York',
      imageUrl: 'https://example.com/image.jpg',
      interests: ['coding', 'hiking', 'reading'],
      lastActive: new Date().toISOString(),
    };

    // Act & Assert
    expect(() => {
      ProfileSchema.parse(invalidProfile);
    }).toThrow();
  });

  it('should throw an error when age is not a number', () => {
    // Arrange
    const invalidProfile = {
      id: '123456',
      name: 'John Doe',
      age: '30', // String instead of number
      bio: 'Software developer with a passion for clean code',
      location: 'New York',
      imageUrl: 'https://example.com/image.jpg',
      interests: ['coding', 'hiking', 'reading'],
      lastActive: new Date().toISOString(),
    };

    // Act & Assert
    expect(() => {
      ProfileSchema.parse(invalidProfile);
    }).toThrow();
  });

  it('should throw an error when imageUrl is not a valid URL', () => {
    // Arrange
    const invalidProfile = {
      id: '123456',
      name: 'John Doe',
      age: 30,
      bio: 'Software developer with a passion for clean code',
      location: 'New York',
      imageUrl: 'not-a-valid-url', // Invalid URL
      interests: ['coding', 'hiking', 'reading'],
      lastActive: new Date().toISOString(),
    };

    // Act & Assert
    expect(() => {
      ProfileSchema.parse(invalidProfile);
    }).toThrow();
  });

  it('should throw an error when interests is not an array', () => {
    // Arrange
    const invalidProfile = {
      id: '123456',
      name: 'John Doe',
      age: 30,
      bio: 'Software developer with a passion for clean code',
      location: 'New York',
      imageUrl: 'https://example.com/image.jpg',
      interests: 'coding, hiking, reading', // String instead of array
      lastActive: new Date().toISOString(),
    };

    // Act & Assert
    expect(() => {
      ProfileSchema.parse(invalidProfile);
    }).toThrow();
  });

  it('should throw an error when lastActive is not a valid datetime string', () => {
    // Arrange
    const invalidProfile = {
      id: '123456',
      name: 'John Doe',
      age: 30,
      bio: 'Software developer with a passion for clean code',
      location: 'New York',
      imageUrl: 'https://example.com/image.jpg',
      interests: ['coding', 'hiking', 'reading'],
      lastActive: 'not-a-valid-datetime', // Invalid datetime
    };

    // Act & Assert
    expect(() => {
      ProfileSchema.parse(invalidProfile);
    }).toThrow();
  });
});
