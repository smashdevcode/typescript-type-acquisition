
# Presentation

## Static Data Typing

### Why Do We Care?

* TypeScript allows for optional static data typing
* Having static data typing vastly improves the development experience

### Demo 1: Static Data Typing

## Type Acquisition

### What Is It?

* "Type acquisition" refers to the process or workflow of acquiring TypeScript declaration `d.ts` files for a TypeScript project

### Why Do We Need It?

* Almost every TypeScript project needs to consume and leverage code in third-party libraries or frameworks. Often, this code wasn't originally written in TypeScript, so the type information won't be included with the published code.
* We need a way to easily find the correct type declaration file, download, and install it in our project.

## Type Declaration Files

### Five Examples

* Let's look at five examples when you'll need declaration files

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
* and more!

## Type Acquisition History

### Manual

* Search, download, and manually add to your project

### Manual Pros/Cons

* Pros: Easy to understand and learn
* Cons: You had to commit your definition files to your repo, no tooling support

### TSD

* TSD is a package manager to search and install TypeScript definition files directly from the community driven DefinitelyTyped repository
* Search, install typings from DefinitelyTyped repo
* Ability to save type declaration file dependencies to `tsd.json` file

### TSD Example

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

### TSD Pros/Cons

* Pros: Relatively easy to understand and learn, allowed you to create a list of declaration file dependencies, you longer had to commit your `d.ts` files
* Cons: Could only install declaration files from DefinitelyTyped, didn't work with module systems

## Typings

### What is It?

* Evolutionary step from `tsd`
* Search and install typings from Typings Registry, GitHub, NPM, Bower, HTTP and local files
* Allows you to customize the alias for global typings
* Allows you to work with typings as modules (instead of global)

### Typings Pros/Cons

* Pros: Support module systems, support for a variety of sources
* Cons: More difficult to understand, poor documentation (at least initially)

### Demo 2: Typings and Global Type Definitions

### Demo 3: Typings and Module Scoped Type Definitions

### Advanced Features

* Changing global alias
* Installing specific version

```
typings install jquery@1.6 --name oldJ
```

### Install Command

```
typings install [<name>=]<location>

  <name>      Module name of the installed definition
  <location>  The location to read from (described below)

Valid Locations:
  [<source>~]<pkg>[@<version>][#<tag>]
  file:<path>
  github:<org>/<repo>[/<path>][#<commitish>]
  bitbucket:<org>/<repo>[/<path>][#<commitish>]
  npm:<pkg>[/<path>]
  bower:<pkg>[/<path>]
  http(s)://<host>/<path>

  <source>    The registry mirror: "npm", "bower", "env", "global", "lib" or "dt"
              When not specified, `defaultSource` in `.typingsrc` will be used.
  <path>      Path to a `.d.ts` file or `typings.json`
  <host>      A domain name (with optional port)
  <version>   A semver range (E.g. ">=4.0")
  <tag>       The specific tag of a registry entry
  <commitish> A git commit, tag or branch
```

See [https://github.com/typings/typings/blob/master/docs/commands.md](https://github.com/typings/typings/blob/master/docs/commands.md)

## TypeScript 2.0

### A New Hope

* Third time's the charm?
* See [https://github.com/Microsoft/TypeScript/issues/9184](https://github.com/Microsoft/TypeScript/issues/9184)

### Why Another Change?

* To make things easier, especially for new TypeScript developers
* Nice to have an "official" workflow for acquiring declaration files

### Demo 4: TypeScript 2.0

### Somewhat Extensible

* `typeRoots` will allow you to define additional package locations

### What Doesn't It Do?

* You cannot change the alias for global declaration files
* Other complex or fringe use cases

### You Can Ignore It!

* You can continue to use whatever workflow you use today
* If the compiler can find your `d.ts` files today, it will be able to tomorrow

### Type Discovery

* Search for types using [https://aka.ms/types](https://aka.ms/types)

### npm @typings

* Automatically updated from DefinitelyTyped
* See https://github.com/Microsoft/types-publisher

### Thanks

James Churchill
Twitter: @SmashDev
GitHub: smashdevcode

[https://github.com/smashdevcode/typescript-type-acquisition](https://github.com/smashdevcode/typescript-type-acquisition)
