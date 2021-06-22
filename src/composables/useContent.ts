import { useContentFactory, UseContent, Context } from '@vue-storefront/core'
import { ContentSearchParams } from '../types'

const search = async (
  context: Context,
  params: ContentSearchParams,
): Promise<any> => {
  // Fetching AEM content happens here:
  return context.$aem.api.getContent(params)
}
const useContent: (cacheId: string) => UseContent<any, ContentSearchParams> =
  useContentFactory<any, ContentSearchParams>({ search })

export { useContent }
