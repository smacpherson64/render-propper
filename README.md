<div align="center">
<h1>RenderPropper</h1>
<p>Creates functional render props</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [PassThrough Examples](#passthrough-examples)
  - [SumEvenNumbers Examples](#sumevennumbers-examples)
- [Exports](#exports)
  - [renderProps](#renderprops)
  - [childrenRenderProp](#childrenrenderprop)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

### Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save render-propper
```

## Usage

RenderPropper aims to create functional render props. The example below helps break down how RenderPropper accomplishes this goal:

```typescript
import { renderProp } from 'render-propper';

/*
* Determines how to transform the input into a result that can be used by the renderer.
* The current logic is an identity function that returns what it receives.
*
* Assuming the string 'value' as input: 'value' would be returned to the renderer.
*/
const logic = input => input;

/*
* Determines how to render the results to output.
* The current logic is again an identity function, it returns what it receives.
*
* NOTE: Typically the renderer would return object or html that renders to the DOM,
* however anything can be rendered as the output.
*
* Again assuming the string 'value' as the result: 'value' would be returned (rendered) as output.
*/
const renderer = results => results;

/*
* Generates the actual render prop using the renderer and logic.
*
* Returns a function awaiting the input.
*/
const PassThrough = renderProp(() => renderer, logic);

// Any value passed in will go through both logic and renderer and be returned.
PassThrough(value); // 'value'
PassThrough(5); // 5
PassThrough(false); // false
```

## Examples

### PassThrough Examples

The basic examples below take an object in and pass the same object back.

All examples below use the same functional logic:

```typescript
import * as R from 'ramda';
import { renderProp } from 'render-propper';

const PassThrough = renderProp(R.prop('children'), R.prop('value'));
```

#### React PassThrough Example

The PassThrough example using React.

```tsx
import * as React from 'react';

const component = (
  <PassThrough value="value">{result => <div>{result}</div>}</PassThrough>
);

// <div>value</div>
```

#### Generic Object PassThrough Example

The PassThrough example using an object.

```typescript
const object = {
  children: results => {
    const div = document.createElement('div');
    div.innerHTML = results;

    return div;
  },
  value: 'value'
};

PassThrough(object);
// <div>value</div>
```

<hr />

### SumEvenNumbers Examples

All examples below utilize the same functional logic:

```typescript
import * as R from 'ramda';
import { renderProp } from 'render-propper';

const isEven = n => n % 2 === 0;

const sumEvenNumbers = R.compose(
  R.sum,
  R.filter(isEven),
  R.prop('array')
);

const SumEven = renderProp(R.prop('children'), sumEvenNumbers);
```

#### React SumEvenNumbers Example

```tsx
import * as React from 'react';

const component = (
  <SumEven array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
    {result => <div>{result}</div>}
  </SumEven>
);

// <div>30</div>
```

#### Generic Object SumEvenNumbers Example

```typescript
const example = {
  children: results => {
    const div = document.createElement('div');
    div.innerHTML = results;

    return div;
  },
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

PassThrough(object);

// <div>30</div>
```

## Exports

All exports have the following Typescript generics associated with them:

```typescript
renderProps<Input, Results, Output>(...)

/**
* These default to any if not set:
*
* Input - The value coming in to the RenderProp
* Results - The value passed from the logic function to the renderer function
* Output - The output of the renderer function
*/
```

### `renderProps`

```typescript
renderProps(renderer: Function);
renderProps(renderer: Function, logic: Function);
```

The main logic for creating render props.

The function is curried (childrenRenderProps is an example of this) and can be used to generate renderProps functions:

```tsx
    // Non-functional example for demonstration purposes:

    const exampleRenderProp = renderProp(R.prop('example'));
    const LastNameList = exampleRenderProp(... lastNameFunction ...);
    const FullNameList = exampleRenderProp(... fullNameFunction ...);

    const nameMap = (name, index) => <div key={index}>{name}</div>);

    <LastNameList names={... namesArray ...} example={names => names.map(nameMap)} />
    <FullNameList names={... namesArray ...} example={names => names.map(nameMap)} />
```

### `childrenRenderProp`

```typescript
childrenRenderProp(logic: Function);
```

In React, the children prop (explicitly or implicitly) is often used for render props. This function makes creating a children render prop a bit easier.

```tsx
    // Non-functional example for demonstration purposes:
    const LastNameList = childrenRenderProp(... lastNameFunction ...);
    const FullNameList = childrenRenderProp(... fullNameFunction ...);

    const nameMap = (name, index) => <div key={index}>{name}</div>);

    <LastNameList names={... namesArray ...} children={names => names.map(nameMap)} /> // Explicit
    <FullNameList names={... namesArray ...}>{names => names.map(nameMap)}</FullNameList> // Implicit
```

## Inspiration

The main inspiration came from having fun connecting [Ramda library][ramda] and [React][react].

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/1659099?v=4" width="100px;"/><br /><sub><b>smacpherson64</b></sub>](https://github.com/smacpherson64)<br />[💻](https://github.com/smacpherson64/render-propper/commits?author=smacpherson64 "Code") [🎨](#design-smacpherson64 "Design") [📖](https://github.com/smacpherson64/render-propper/commits?author=smacpherson64 "Documentation") [🤔](#ideas-smacpherson64 "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/5865074?v=4" width="100px;"/><br /><sub><b>Chad Watson</b></sub>](https://github.com/chadwatson)<br />[💬](#question-chadwatson "Answering Questions") [💻](https://github.com/smacpherson64/render-propper/commits?author=chadwatson "Code") [🎨](#design-chadwatson "Design") [🤔](#ideas-chadwatson "Ideas, Planning, & Feedback") |
| :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/smacpherson64/render-propper.svg?style=flat-square
[build]: https://travis-ci.org/smacpherson64/render-propper
[coverage-badge]: https://img.shields.io/codecov/c/github/smacpherson64/render-propper.svg?style=flat-square
[coverage]: https://codecov.io/github/smacpherson64/render-propper
[version-badge]: https://img.shields.io/npm/v/render-propper.svg?style=flat-square
[package]: https://www.npmjs.com/package/render-propper
[downloads-badge]: https://img.shields.io/npm/dm/render-propper.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/render-propper
[license-badge]: https://img.shields.io/npm/l/render-propper.svg?style=flat-square
[license]: https://github.com/smacpherson64/render-propper/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/smacpherson64/render-propper/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/smacpherson64/render-propper.svg?style=social
[github-watch]: https://github.com/smacpherson64/render-propper/watchers
[github-star-badge]: https://img.shields.io/github/stars/smacpherson64/render-propper.svg?style=social
[github-star]: https://github.com/smacpherson64/render-propper/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20render-propper%20by%20%40smacpherson64%20https%3A%2F%2Fgithub.com%2Fsmacpherson64%2Frender-propper%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/smacpherson64/render-propper.svg?style=social
[emojis]: https://github.com/smacpherson64/all-contributors#emoji-key
[all-contributors]: https://github.com/smacpherson64/all-contributors
[ramda]: https://ramdajs.com
[react]: https://reactjs.org
