module.exports = {
    stories: ['../components/**/**/*.stories.tsx'],
    addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
      },
};