
# Presentation

## Type Acquisition

* What does it mean?
* Why do we need it?

## Examples

* See [https://github.com/typings/typings/blob/master/docs/examples.md](https://github.com/typings/typings/blob/master/docs/examples.md)

## History

* Manual
 * DefinitelyTyped
 * Search, download, and manually add to your project
* tsd
 * Search, install typings from DefinitelyTyped repo
* typings
 * Next evolution of that tool
 * Search, install typings from Typings Registry, GitHub, NPM, Bower, HTTP and local files
 * "With Typings the dependencies are entirely isolated as Typings are not global until Typings installs them and makes them global. And the user of Typings decides on the form those global definitions take."
  * Allows you to customize the alias for global typings
  * Allows you to work with typings as modules (instead of global)

## Typings Demo

* Show basic example

## Advanced Features

* Changing global alias
* Installing specific version
 * See [https://github.com/typings/typings/blob/master/docs/registry.md](https://github.com/typings/typings/blob/master/docs/registry.md)

## Type Acquisition in TS 2.0

* Why another change?
* How does it work?
 * Install declaration files using npm
 * TS 2.0 compiler will now look in node_modules for declaration files
* What doesn't it do?
* What if I don't want to change?
 * You can continue to use whatever workflow you use today
 * If the compiler can find your d.ts files today, it will be able to tomorrow
* New `types` compiler option for providing a specific location for declaration files?

## npm @typings

* Automatically updated from DefinitelyTyped
* See https://github.com/Microsoft/types-publisher

## Module Resolution

* See "Path mappings based module resolution" [https://github.com/Microsoft/TypeScript/issues/5039](https://github.com/Microsoft/TypeScript/issues/5039)

## When You Don't Need Type Acquisition

* Some packages ship with their own declaration files
* If that's the case, the compiler will use those files (no effort required on your part)

## Conflicting Versions of Declaration Files

* What does this look like?
* How to resolve
