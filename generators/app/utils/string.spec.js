console.log(isKebabCase("hello-world")); // true
console.log(isKebabCase("helloWorld")); // false
console.log(isKebabCase("hello-World")); // false
console.log(isKebabCase("-hello-world")); // false
console.log(isKebabCase("hello-world-")); // false
console.log(isKebabCase("hello--world")); // false

console.log(isCamelCase("helloWorld")); // true
console.log(isCamelCase("HelloWorld")); // true
console.log(isCamelCase("hello_world")); // false
console.log(isCamelCase("Hello_World")); // false
console.log(isCamelCase("hello-world")); // false
console.log(isCamelCase("Hello-World")); // false
