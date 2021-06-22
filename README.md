# Vue Storefront AEM Integration

The following guide walks you through setting up the Adobe Experience Manager (AEM) integration with Vue Storefront.

The main feature at this point is being able to make GraphQL queries to AEM which then returns Content Fragment data as JSON so that it can be rendered in Vue Storefront.

## Installation

Install the module into your app:

```bash
npm install @bounteous/vue-storefront-aem --save
```

or

```bash
yarn add @bounteous/vue-storefront-aem
```

## Setup

Register the module in the `nuxt.config.js` file:

```javascript
export default {
  //...
  modules: [
    '@bounteous/vue-storefront-aem/nuxt',
  ]
  //...
}
```

Additionally, in the `nuxt.config.js`, you need to register the AEM module as a rawSource under the @vue-storefront/nuxt module:

```javascript
export default {
  //...
  buildModules: [
    // ...
    ['@vue-storefront/nuxt', {
      useRawSource: {
        dev: [
          // ...
          '@bounteous/vue-storefront-aem',
          // ...
          ],
        prod: [
          // ...
          '@bounteous/vue-storefront-aem',
          // ...
          ],
      },
    }],
    // ...
  ]
  //...
}
```

Next, in `middleware.config.js`, configure the connection to your AEM instance:

```javascript
module.exports = {
  integrations: {
    // ...
    aem: {
      location: '@bounteous/vue-storefront-aem/server',
      configuration: {
        serviceURL: 'http://localhost:4503',
        endpoint: '/content/_cq_graphql/global/endpoint.json',
        // Provide credentials if necessary (for example on Author)
        // See https://github.com/adobe/aem-headless-client-nodejs for more info.
        //auth: [process.env.AEM_USER, process.env.AEM_PW]
      },
    },
  }
}
```

Note that for real use cases you'll need to point the configuration to an AEM Publish instance because otherwise images won't render.

## Content Rendering

You can go through the manual steps below or check out our [repository with examples](https://github.com/Bounteous-Inc/vue-storefront-aem-examples).

---

First, copy the `RenderContent.vue` component from the integration package.
You can later customize this to your needs.

```bash
cp node_modules/@bounteous/vue-storefront-aem/components/RenderContent.vue cms/
```

You may need to create the `cms` folder if it doesn't already exist in your project.
Then add the package and Vue component import wherever you want to use it, for example in the `Home.vue`:

```javascript
import { useContent } from '@bounteous/vue-storefront-aem';
import RenderContent from '~/cms/RenderContent.vue'
```

Add `RenderContent` to your list of components:

```javascript
components: {
    RenderContent,
  },
```

And use it like this:

```javascript
setup() {

  const {
    search,
    content,
    loading,
    error
  } = useContent();

  onSSR(async () => {
    const query = `
    {
      blogArticleAuthorList {
        items {
          name
          title
        }
      }
    }
    `;
    await search({ query: query });
  });

  return {
    content,
    loading,
    error,
  };
}
```

Lastly, render the content using the Vue component:

```javascript
<RenderContent v-if="content" :content="content" />
```
