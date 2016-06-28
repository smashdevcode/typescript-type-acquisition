
# Demos

## Demo 1: Static Data Typing

* Show examples of static data typing
* Show what happens when you try to use global library like jQuery or Lodash
* Show how to use the `declare` keyword
* Show why the `any` data type is useful, but ultimately limiting

## Demo 2: Typings and Global Type Definitions

1. Install Typings as a dev dependency

```
npm install typings --save-dev
```

2. Initialize Typings

```
typings init
```

3. Search for `knockout`

```
typings search knockout
```

4. Install `knockout` globally

```
typings install dt~knockout --global --save
```

### How Does It Work?

* Show the `typings.json` file
* Show the `typings` folder
 * Don't commit this folder!
* Show the Knockout declaration file
 * See [https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/knockout/knockout.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/knockout/knockout.d.ts)
 * Show what it looks like after install with Typings
 * Installed "as is"

## Demo 3: Typings and Module Scoped Type Definitions

1. Install Typings as a dev dependency

```
npm install typings --save-dev
```

2. Initialize Typings

```
typings init
```

3. Search for `knockout`

```
typings search knockout
```

4. Install `knockout` (defaults to "npm" source)

```
typings install knockout --save
```

### How Does It Work?

* Show the Knockout declaration file
 * Show what it looks like after install with Typings
 * Installed wrapped in a module

## Demo 4: TypeScript 2.0

Install the latest nightly build of TypeScript.

```
npm install -g typescript@next
```

Update your Visual Studio Code user setttings in order to make the editor happy.

```
// Specifies the folder path containing the tsserver and lib*.d.ts files to use.
"typescript.tsdk": "/usr/local/lib/node_modules/typescript/lib"
```

Install your dependencies and your declaration file(s)!

```
npm install --save lodash
npm install --save @types/lodash
```

### How Does It Work?

TS 2.0 compiler will now look in `node_modules/@types/<package>` folder first for declaration files before looking in `node_modules/<package>`
