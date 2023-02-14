const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Creating component...');

    this.argument('name', {
      type: String,
      required: true,
      description: 'The name of the component. This will also be the name of the directory containing the component.',
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('component.tsx.ejs'),
      this.destinationPath(`${this.options.name}.tsx`),
      { name: this.options.name },
    );

    this.fs.copyTpl(
      this.templatePath('component.module.scss.ejs'),
      this.destinationPath(`${this.options.name}.module.scss`),
      { name: this.options.name },
    );
  }

  done() {
    console.log('Finished!');
  }
};
