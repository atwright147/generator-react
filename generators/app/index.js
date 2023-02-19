// @ts-check

const path = require('path');
const Generator = require('yeoman-generator');
const { pascalCase } = require('./utils/string');
const { camelCase, kebabCase } = require('lodash');

module.exports = class extends Generator {
  data = {};

  constructor(args, opts) {
    super(args, opts);
    this.log('Creating component...');

    this.argument('type', {
      type: String,
      required: false,
      description: 'The type of code to generate ("component", "route". "zustand store", "redux slice")',
    });

    this.argument('name', {
      type: String,
      required: true,
      description: 'The name of the component. This will also be the name of the directory containing the component.',
    });

    this.data.parsedPath = path.parse(this.options.name);
    this.data.name = {
      camel: camelCase(this.data.parsedPath.name),
      kebab: kebabCase(this.data.parsedPath.name),
      pascal: pascalCase(this.data.parsedPath.name),
    };

    console.info(this.data);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('component/component.tsx.ejs'),
      this.destinationPath(path.join(this.data.parsedPath.dir, `${this.data.name.kebab}.component.tsx`)),
      {
        ...this.data.name,
      },
    );

    this.fs.copyTpl(
      this.templatePath('component/component.module.scss.ejs'),
      this.destinationPath(path.join(this.data.parsedPath.dir, `${this.data.name.kebab}.module.scss`)),
      {
        ...this.data.name,
      },
    );

    this.fs.copyTpl(
      this.templatePath('component/component.spec.ts.ejs'),
      this.destinationPath(path.join(this.data.parsedPath.dir, `${this.data.name.kebab}.spec.ts`)),
      {
        ...this.data.name,
      },
    );
  }

  done() {
    console.log('Finished!');
  }
};
