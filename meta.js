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
      "default": "Karma+Mocha",
      "value": "karma"
    }
  },
  "filters": {
   ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit",
    "test/unit/**/*": "unit",
    "test/unit/index.js": "unit",
    "test/unit/jest.conf.js": "unit === 'jest'",
    "test/unit/karma.conf.js": "unit",
    "test/unit/specs/index.js": "unit",
    "test/unit/setup.js": "unit === 'jest'",
    "src/router/**/*": "router"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
