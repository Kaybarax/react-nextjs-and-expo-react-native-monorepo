# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## NativeWind CSS

This project uses [NativeWind](https://www.nativewind.dev/) for styling, which brings the power of Tailwind CSS to React Native.

### Usage

1. Import the styled function from nativewind:

   ```jsx
   import { styled } from 'nativewind';
   ```

2. Create styled components:

   ```jsx
   const StyledView = styled(View);
   const StyledText = styled(Text);
   ```

3. Use Tailwind classes in your components:

   ```jsx
   <StyledView className="flex-1 justify-center items-center">
     <StyledText className="text-lg font-bold">Hello World</StyledText>
   </StyledView>
   ```

### Configuration

The NativeWind configuration is set up in the following files:

- `tailwind.config.js`: Tailwind CSS configuration
- `babel.config.js`: Babel configuration with NativeWind plugin
- `global.css`: Global CSS file with Tailwind directives

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [NativeWind documentation](https://www.nativewind.dev/): Learn how to use Tailwind CSS in React Native.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
