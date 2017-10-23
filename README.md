# Dramthology

## Features

### Current
- Webpack 3
- Sass compilation
- JS (ES6) compilation

### Desired
- Sass minification (production)
- JS minification (production)
- HTML minification (production)
- Asset optimisation/management

## Install

    npm i

## Run
### Development

    npm run dev

### Production Build

    npm run build

### "Develop and Production? Eh?"

During development, nothing is minified and the styles are boshed into the javascript (believe it or not) to let us have a live reloading preview. Whereas for production, it creates a dedicated bundle.css file and everything is minified and tidy.

## Structure

* `/src` - Everything lives here
* `/dist` - This is generated from /src and disposable

## Coding Guidelines

Note, these are _guidelines_ not rules; intended to direct you toward building clean, maintainable projects without slowing your short term workflow too much.

### Sass Exemplary Example

Use a logical order of priority where possible, such as [Recess](https://github.com/twitter/recess/blob/146143bc0876e559e16a9895bd2d5212eee8730d/lib/lint/strict-property-order.js#L36).

``` css

// Decent idea is to comment your import cascade, e.g:
@import "test", // First because it contains global mixins
  "test2",
  "test3",
  "test4"; // Always after test3 because it relies on mixins

element,
[attribute='value'],
.class {
  // Attribute selectors are a more semantic way to target elements, and can be overwritten easily with classes
  $locally-scoped-variable: value; // Variables
  @include mixin; // Mixins
  // Don't use @include extend; https://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/
  background: red;

  // CSS Supports
  @supports (property: value) {
  }
  // Pseudo elements
  &::before {
    // :: is the HTML5 syntax (ie9+), use : if supporting older browsers
  }
  // Elements
  div {
    // Nested sibling
    + div {
    }
  }
  // Selectors
  > div,
  ~ div &[attribute='value'] {
    // Attribute selectors are a more semantic way to target elements, and can be overwritten easily with classes
    // Keeping specificity as low as possible for as long as possible makes the cascade easier to change
    // Double quotes are important to escape any erroneous single quotes in a value, and just to match the syntax of the HTML attribute and maximise readibility

    // &[attribute="value" i] ***FUTURE*** makes the value case insensitive - DOES NOT YET COMPILE IN SASS
  }
  // Classes
  .class { }
  &:empty,
  &:disabled {
    // Selectors
  }
  &:hover {
    // Pseudo classes
  }
  @media (min-width: value) {
    // Media queries - ***MOBILE FIRST***
  }
}

```
