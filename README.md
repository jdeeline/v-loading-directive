# v-loading-directive

![NPM Downloads](https://img.shields.io/npm/dt/v-loading-directive)
[![npm-version](https://badgen.net/npm/v/v-loading-directive)](https://www.npmjs.com/package/v-loading-directive)

A simple loading indicator for your Vue project. Vue 2.x and 3.x versions are supported.

## Installation

```bash
npm install v-loading-directive
```

## Usage

First, register the directive.

```javascript
// globally
import Vue from 'vue';
import VLoading from 'v-loading-directive';

Vue.directive('loading', VLoading);

// or locally
import loading from 'v-loading-directive';

export default {
  directives: {
    loading,
  },
};
```

Then add `v-loading` attribute to element, passing a boolean value.

```html
<template>
  <div v-loading="isLoading">...some content...</div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: true,
      };
    },
  };
</script>
```

## Customization

You can use CSS variables to customize spinner color and size.

```html
<template>
  <div v-loading="isLoading" class="content">...some content...</div>
</template>

<style scoped>
  .content {
    --v-loading-color: red;
    --v-loading-size: 4em;
  }
</style>
```

## License

[MIT](LICENSE) License
