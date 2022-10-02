module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            components: './src/components',
            container: './src/container',
            hooks: './src/hooks',
            screens: './src/screens',
            stacks: './src/stacks',
            utils: './src/utils',
            constants: './src/constants',
            data: './src/data',
          },
        },
      ],
    ],
  };
};
