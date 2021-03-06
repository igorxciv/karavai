# Karavai JS

## KaravaiJS - Images sequence scrolling engine with no dependencies

[![NPM](https://nodei.co/npm/karavai.png)](https://nodei.co/npm/karavai/)

![Status](https://github.com/igorexec/karavai/workflows/Coverage/badge.svg)
[![codecov](https://codecov.io/gh/igorexec/karavai/branch/master/graph/badge.svg)](https://codecov.io/gh/igorexec/karavai)
![License](https://img.shields.io/github/license/igorexec/karavai)
![Deps](https://img.shields.io/david/igorexec/karavai)
![Maintainability](https://img.shields.io/codeclimate/maintainability/igorexec/karavai)
![Issues](https://img.shields.io/codeclimate/issues/igorexec/karavai)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/igorexec/karavai)
![Downloads](https://img.shields.io/npm/dm/karavai)

![ZIP Size](https://img.shields.io/bundlephobia/minzip/karavai)
---
## [Demo](https://karavai.netlify.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/89eefe85-3dda-4fa7-b596-5bd6b9da885e/deploy-status)](https://app.netlify.com/sites/karavai/deploys)

## Installation

### CDN

```html
<script src="https://unpkg.com/karavai@latest/karavai.es5.js"></script>
```

### UMD

```bash
yarn add --exact karavai
```

```bash
npm install --save-exact karavai
```

## Usage

```javascript
// import package. You can miss this step for CDN installation
import Karavai from 'karavai';

const images = [...];
const canvasRef = document.querySelector('#my');

const karavai = new Karavai(images, canvasRef);

(async () => {
  await karavai.preloadImages()
  karavai.start()
}())
```

## Configuration

Options

```javascript
const options = {
  // Number
  // images change threshold in pixels.
  // Means: every N pixels, update image to the next one
  // Default: 30
  threshold: 30
};
const karavai = new Karavai(images, canvasRef, options);
karavai.start();
```

### API

#### preloadImages - preloads provided amount of images. _Default: all images. Returns: Promise_. Preload is not required, but strongly recommended

```javascript
const karavai = new Karavai(images, canvasRef);
karavai.preloadImages(); // -> Promise
```

#### start - start karavai. It will start logic which updates images on scroll.

```javascript
const karavai = new Karavai(images, canvasRef);
karavai.start();
```

#### stop - stop karavai. It will stop logic which updates images on scroll.

```javascript
const karavai = new Karavai(images, canvasRef);
karavai.stop();
```

## License

Karavai.js is freely distributable under the terms of the [MIT license](https://github.com/igorexec/karavai/blob/master/LICENSE).
