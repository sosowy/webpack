module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "required": true,
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        }
      ]
    },
    
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "lint": {
      "type": "confirm",
      "required": true,
      "message": "Use ESLint to lint your code"
    },
    "lintConfig": {
      "when": "lint",
      "message": "Pick an ESLint preset",
      "required": true,
      "choices": [
        {
          "name": "Standard (https://github.com/standard/standard)",
          "value": "standard",
          "short": "Standard"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "required": true,
      "message": "Setup unit tests"
    },
    "runner": {
      "when": "unit",
      "message": "Pick a test runner",
      "required": true,
      "choices": [
        {
          "name": "Karma and Mocha",
          "value": "karma",
          "short": "karma"
        }
      ]
    }
  },
  "filters": {
   ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit",
    "build/webpack.test.conf.js": "unit && runner === 'karma'",
    "test/unit/**/*": "unit",
    "test/unit/index.js": "unit && runner === 'karma'",
    "test/unit/jest.conf.js": "unit && runner === 'jest'",
    "test/unit/karma.conf.js": "unit && runner === 'karma'",
    "test/unit/specs/index.js": "unit && runner === 'karma'",
    "test/unit/setup.js": "unit && runner === 'jest'",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
