
# Presentation



## TODO

* Test TS 2.0 workflow

* Review Typings advanced options
 * Changing the global alias?
 * Specific version?
 * How can you have Typing search and install from local or private sources?
  * Just mention that this option is available?

* How does the Typings registry work?
 * Is this worth going deeper on?

* Make this presentation friendlier for people who might be new to TypeScript
* Also include some advanced(ish) demos and topics
* Work up notes for demos
* Rehearse and time




## TypeScript Static Data Typing

### Why Do We Care?

TypeScript allows for optional static data typing. Having static data typing vastly improves the development experience.

### Demo - Static Data Typing

* Show examples of static data typing
* Show why the `any` data type is useful, but ultimately limiting

## Type Acquisition

### What Is It?

"Type acquisition" refers to the process or workflow of acquiring TypeScript declaration `d.ts` files for a TypeScript project.

### Why Do We Need It?

* Almost every TypeScript project needs to consume and leverage code in third-party libraries or frameworks. Often, this code wasn't originally written in TypeScript, so the type information won't be included with the published code.
* We need a way to easily find the correct type declaration file, download, and install it in our project.

## Type Declaration Files

## Five Examples

Let's look at five examples when you'll need declaration files.

### Example 1 - Global Environment

* Packages that, when loaded, extend the global scope environment with a number of new functions, variables, classes, etc.
* Example: mocha
* Global type definition
* Listed in the Typings Registry under `env`

### Example 2 - Global Scripts

* Packages that should be loaded using a script tag
* Example: knockout
* Global type definition
* Listed in the Typings Registry under `global`

### Example 3 - CommonJS Modules

* Packages that should be loaded with a CommonJS compatible loader such as browserify or webpack
* Example: knockout on npm
* External module type definition using `export =`
* Listed in the Typings Registry under `npm`

### Example 4 - ES6 Modules

* Packages written in ES6+
* Example: ???
* External module type definition using ES6 module syntax (default export and named export)

### Example 5 - TypeScript Packages

* Packages written in TypeScript and compiled to JavaScript with declaration .d.ts files
* Example: RxJS 5 ([https://github.com/ReactiveX/rxjs](https://github.com/ReactiveX/rxjs))
* No need to write a type definition (the declaration files included in the package should be automatically detected and used by the TypeScript compiler upon consumption of the package)

## Type Declaration Sources

### DefinitelyTyped

* The primary repository for TypeScript type definitions
* Available at [https://github.com/DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

### Others

* GitHub
* NPM
* Bower

## Type Acquisition History

### Manual

* Search, download, and manually add to your project
* Pros: Easy to understand and learn
* Cons: You had to commit your definition files to your repo, no tooling support

### TSD

* Command line tool similar to `npm`
* Search, install typings from DefinitelyTyped repo
* Ability to save type declaration file dependencies to `tsd.json` file

```
$ tsd install jquery --save

$ tsd query angular -ir
$ tsd query angularjs/

$ tsd query jquery.*
# glob on mac/linux
$ tsd query "jquery.*"

#install all definitions from tsd.json
$ tsd install
```

* Pros: Relatively easy to understand and learn, allowed you to create a list of declaration file dependencies, you longer had to commit your `d.ts` files
* Cons: Could only install declaration files from DefinitelyTyped, didn't work with module systems

### Typings

* Evolutionary step from `tsd`
* Search and install typings from Typings Registry, GitHub, NPM, Bower, HTTP and local files
* Allows you to customize the alias for global typings
* Allows you to work with typings as modules (instead of global)

* Pros: Support module systems, support for a variety of sources
* Cons: More difficult to understand, poor documentation (at least initially)

## Typings

### Demo - Basic Typings Usage

```

# Install Typings CLI utility
npm install typings --global

# Search for definitions
typings search tape

# If you use the package as a module:
# Install non-global typings (defaults to "npm" source, configurable through `defaultSource` in `.typingsrc`)
typings install debug --save

# If you use the package through script tag, or it is part of the environment, or
# the non-global typings is not yet available:
typings install dt~mocha --global --save

# Install typings from particular registry.
typings install env~atom --global --save
typings install npm~bluebird --save

```

### Demo - How Typings Works

* Show the `typings.json` file
* Show the `typings` folder
 * Don't commit this folder!
* Show the Knockout declaration file
* Show what it looks like after install with Typings
 * Via `npm` (modularized)
 * Via `dt` (global)

### Advanced Features

* Changing global alias
* Installing specific version
 * See [https://github.com/typings/typings/blob/master/docs/registry.md](https://github.com/typings/typings/blob/master/docs/registry.md)

### Integrating with NPM Workflow

```
{
  "scripts": {
    "build": "rm -rf dist && tsc",
    "prepublish": "typings install && npm run build"
  }
}
```






## TypeScript 2.0

### Type Acquisition in TS 2.0

See https://github.com/Microsoft/TypeScript/issues/9184

* Why another change?
* How does it work?
 * Install declaration files using `npm`
 * TS 2.0 compiler will now look in `node_modules/@types` folder for declaration files
* What doesn't it do?
* What if I don't want to change?
 * You can continue to use whatever workflow you use today
 * If the compiler can find your d.ts files today, it will be able to tomorrow
* New `types` compiler option for providing a specific location for declaration files?
* New `typeRoots` compiler option?

### Try It Out Today

Install the latest nightly build of TypeScript.

```
npm install -g typescript@next
```

Update your Visual Studio Code user setttings.

```
// Specifies the folder path containing the tsserver and lib*.d.ts files to use.
"typescript.tsdk": "/usr/local/lib/node_modules/typescript/lib"
```

### npm @typings

* Automatically updated from DefinitelyTyped
* See https://github.com/Microsoft/types-publisher







### Module Resolution

* See "Path mappings based module resolution" [https://github.com/Microsoft/TypeScript/issues/5039](https://github.com/Microsoft/TypeScript/issues/5039)

### When You Don't Need Type Acquisition

* Some packages ship with their own declaration files
* If that's the case, the compiler will use those files (no effort required on your part)

### Conflicting Versions of Declaration Files

* What does this look like?
* How to resolve
