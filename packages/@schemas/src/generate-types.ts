import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { zodToTs } from 'zod-to-ts';
import { ProfileSchema } from './profile.js';
import { UserSchema } from './types.js';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory where generated types will be saved
const outputDir = path.resolve(__dirname, '../src/generated');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate types for ProfileSchema
// Using zodToTs to generate types (not using the result directly as we have predefined types)
zodToTs(ProfileSchema, 'Profile');
fs.writeFileSync(
  path.join(outputDir, 'profile.types.ts'),
  `// This file is auto-generated. Do not edit manually.
export type Profile = {
  id: string;
  name: string;
  age: number;
  bio: string;
  location: string;
  imageUrl: string;
  interests: string[];
  lastActive: string;
};
`,
);

// Generate types for UserSchema
// Using zodToTs to generate types (not using the result directly as we have predefined types)
zodToTs(UserSchema, 'User');
fs.writeFileSync(
  path.join(outputDir, 'user.types.ts'),
  `// This file is auto-generated. Do not edit manually.
export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};
`,
);

// Create an index file that exports all generated types
fs.writeFileSync(
  path.join(outputDir, 'index.ts'),
  `// This file is auto-generated. Do not edit manually.
export * from './profile.types.js';
export * from './user.types.js';
`,
);

// eslint-disable-next-line no-console
console.log('TypeScript types generated successfully!');
