
# Presentation Cutting Room Floor

## Type Declaration Files

### Five Examples

* Let's look at five examples when you'll need declaration files

### Example 1 - Global Environment

* Packages that, when loaded, extend the global scope environment with a number of new functions, variables, classes, etc.
* Example: mocha
* Global type definition

### Example 2 - Global Scripts

* Packages that should be loaded using a script tag
* Example: knockout
* Global type definition

### Example 3 - CommonJS Modules

* Packages that should be loaded with a CommonJS compatible loader such as browserify or webpack
* Example: knockout on npm
* External module type definition using `export =`

### Example 4 - ES6 Modules

* Packages written in ES6+
* Example: ???
* External module type definition using ES6 module syntax (default export and named export)

### Example 5 - TypeScript Packages

* Packages written in TypeScript and compiled to JavaScript with declaration .d.ts files
* Example: RxJS 5 ([https://github.com/ReactiveX/rxjs](https://github.com/ReactiveX/rxjs))
* No need to write a type definition (the declaration files included in the package should be automatically detected and used by the TypeScript compiler upon consumption of the package)

### Integrating with NPM Workflow

```
{
  "scripts": {
    "build": "rm -rf dist && tsc",
    "prepublish": "typings install && npm run build"
  }
}
```

### Demo - Conflicting Versions of Declaration Files

* What does this look like?
* How to resolve
