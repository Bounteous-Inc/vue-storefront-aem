/**
 * Get the first and only item from the GraphQL response object that AEM returns.
 *
 * Assumes JSON structure like this:
 *
 * {
 *   "blogArticleByPath": {
 *     "item": {
 *       "title": "Lorem Ipsum"
 *     }
 *   }
 * }
 *
 * @param contentData GraphQL response
 * @returns Content Fragment object
 */
export const getContentFragment = (contentData: {}): {} => {
  const [type] = Object.keys(contentData)
  return contentData[type].item
}

/**
 * Get a list of objects GraphQL response object that AEM returns.
 *
 * Assumes JSON structure like this:
 *
 * {
 *   "blogArticles": {
 *     "items": [
 *        {
 *          "title": "Lorem Ipsum"
 *        }
 *     ]
 *   }
 * }
 *
 * @param contentData GraphQL response
 * @returns List of Content Fragment objects
 */
export const getContentFragmentList = (contentData: {}): [] => {
  const [type] = Object.keys(contentData)
  return contentData[type].items
}
