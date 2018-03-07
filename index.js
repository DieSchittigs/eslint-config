module.exports = {
    extends: [
        'airbnb-base'
    ],

    parserOptions: {
        ecmaFeatures: {
            forOf: true
        }
    },

    rules: {
        indent: ['error', 4],
        'comma-dangle': ['warn', 'never'],
        'prefer-template': 'warn',
        'no-plusplus': 'off'
    }
};

