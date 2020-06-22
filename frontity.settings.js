const settings = {
  "name": "test",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "my-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://jearwebdevelopment.jear2003.webfactional.com/wp/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
