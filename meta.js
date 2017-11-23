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
      "type": "string",
      "required": true,
      "default": "ESLint",
      "value": "standard"
    },
    "unit": {
      "type": "string",
      "required": true,
      "default": "Karma",
      "value": "karma"
    },
     "e2e": {
      "type": "string",
      "required": true,
      "default": "nightwatch",
      "value": "nightwatch"
    },
  "filters": {
   ".eslintrc.js": "lint==='standard'",
    ".eslintignore": "lint==='standard'",
    "config/test.env.js": "unit",
    "build/webpack.test.conf.js": "unit === 'karma'",
    "test/unit/**/*": "unit",
    "test/unit/index.js": "unit === 'karma'",
    "test/unit/jest.conf.js": "unit === 'jest'",
    "test/unit/karma.conf.js": "unit === 'karma'",
    "test/unit/specs/index.js": "unit === 'karma'",
    "test/unit/setup.js": "unit === 'jest'",
    "test/e2e/**/*": "e2e==='nightwatch'",
    "src/router/**/*": "router"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
