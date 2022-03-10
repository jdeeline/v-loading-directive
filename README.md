# v-loading-directive

A simple loading indicator for your Vue project.

## Usage

First, register the directive.

```javascript
// globally
import Vue from 'vue';
import VLoading from 'v-loading-directive';

Vue.directive('loading', VLoading);

// or locally
import loading from 'v-loading';

export default {
  directives: {
    loading,
  },
};
```

Then add `v-loading` attribute to element, passing a boolean value.

```vue
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

```vue
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
