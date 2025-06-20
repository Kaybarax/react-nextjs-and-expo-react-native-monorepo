// Implementation of ProfileSchema using zod
import { z } from 'zod';

// Define the ProfileSchema
export const ProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
  bio: z.string(),
  location: z.string(),
  imageUrl: z.string().url(),
  interests: z.array(z.string()),
  lastActive: z.string().datetime(),
});
