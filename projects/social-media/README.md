[![Build Status](https://travis-ci.org/vicky-ui/social-media.svg?branch=master)](https://travis-ci.org/vicky-ui/social-media)


# social-media
## Angular Library POC 

https://vicky-ui.github.io/social-media/

### What does this repository contain?

1. Angular Collection:
  - Angular Library to build a Design System for other projects. 
  - Angular Application to expose the tools provided and UX guidelines.
  - Empty Angular Application to generate bundles to be used by non-angular applications.
2. Non-Angular site to consume the custom elements

### How can it be used?

Use these npm commands to:

- Install dependencies: **npm install**
- Build social-media and social-media-showcase: **npm run build**
- Build social-media: **npm run build:lib**
- Build social-media-showcase: **npm run build:demo**
- Build social-media-elements-helper: **npm run build:element**
- Bundle social-media-elements-helper files: **npm run bundle:element**
- Build social-media, social-media-showcase, build social-media-elements-helper and bundle the files: **npm run build:all**
- Run social-media-showcase: **npm run start**

- Run non-angular site: change directory to html-app and execute: **http-server**, open localhost:8080/index.html in the browser. *Need to have globally installed http-server, otherwise, npm install http-server g, close the command prompt, cd html-app, http-server and open the localhost on the open port that is shown as part of the command execution.*
