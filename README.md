[![Frontend Masters](https://static.frontendmasters.com/assets/brand/logos/full.png)](https://frontendmasters.com/courses/headless-cms-nextjs/)

This repo is a companion to the [Headless CMSs course](https://frontendmasters.com/courses/headless-cms-nextjs/) on Frontend Masters.

## Requirements
- Node version 20 & npm

## Getting Started

To being the course, clone the repo and check out the `step/0` branch. The main branch contains an example solution of the final application build throughout the course. The other `step/X` branches are checkpoint branches during the course.

```bash
git clone https://github.com/Hendrixer/headless-nextjs.git
cd headless-nextjs
git checkout step/0
npm install
npm run dev
```

## Contentful CMS

Contenful is the CMS used in this course. Create a free Contentful account and add environment variables to your project:

1. Create a [Contentful](https://www.contentful.com/) account
2. Create a new "Space" in Contentful for the project
3. Add these environment variables to a `.env` file in the root of your project. The values can be found in Contentful under Settings > API keys:

```
CONTENTFUL_SPACE_ID=""
CONTENTFUL_ACCESS_TOKEN=""
CONTENTFUL_PREVIEW_ACCESS_TOKEN=""
CONTENTFUL_PREVIEW_SECRET=""
```

