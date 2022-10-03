const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Creating component...");

    this.argument("name", {
      type: String,
      required: true,
      description:
        "The name of the component. This will also be the name of the directory containing the component.",
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("component.jsx"),
      this.destinationPath(this.options.name + ".jsx"),
      {
        name: this.options.name,
      }
    );
  }

  done() {
    console.log("Finished!");
  }
};
