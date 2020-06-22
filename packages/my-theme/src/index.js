import React from "react";
import image from "@frontity/html2react/processors/image";
import Theme from './components';

export default {
  name: "my-theme",
  roots: {
    mytheme: Theme
  },
  state: {
    mytheme: {}
  },
  actions: {
    mytheme: {}
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image],
    },
    mytheme: {
      sanitizeString: (value = '') => {
        return value.replace(/(<([^>]+)>)/ig, '');
      }
    }
  },
};
