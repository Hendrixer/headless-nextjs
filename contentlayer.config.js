import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Update = defineDocumentType(() => ({
  name: 'Update',
  filePathPattern: `update/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/update\/?/, ''),
    },    
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Update],
})