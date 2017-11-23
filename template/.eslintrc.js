// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  {{#if_eq lintConfig "standard"}}
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  extends: 'airbnb-base',
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  {{#if_eq lintConfig "airbnb"}}
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  {{/if_eq}}
  // add your custom rules here
  'rules': {
    // https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  {{#if_eq lintConfig "standard"}}
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  extends: 'airbnb-base',
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  {{#if_eq lintConfig "airbnb"}}
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  {{/if_eq}}
  // add your custom rules here
  'rules': {
    {{#if_eq lintConfig "standard"}}
    semi: [2, "never"],
    'no-undef': [2],
    'no-tabs': 2,
    'comma-dangle': ['error', 'always-multiline'],
    'max-depth': [2, 4],
    'max-params': [2, 4],
    'max-statements': [2, 25],
    'quotes': [2, 'single'],
    'max-len': ['error', {
      code: 80,
      ignoreComments: true,
    }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

    {{#if_eq lintConfig "standard"}}
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
