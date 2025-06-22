module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    plugins: [
      'expo-router/babel',
      'nativewind/babel',
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-flow-strip-types',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }]
    ],
  };
};
