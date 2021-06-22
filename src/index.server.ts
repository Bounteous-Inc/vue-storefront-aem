import { apiClientFactory } from '@vue-storefront/core'
import { ApiContext, ContentSearchParams } from './types'
import AEMHeadless from '@adobe/aem-headless-client-nodejs'
import { Logger } from '@vue-storefront/core'

import { getContent } from './api'

const setup = ({
  serviceURL,
  endpoint,
  auth,
}: ContentSearchParams): ApiContext => {
  Logger.debug('AEM endpoint configured:', serviceURL, endpoint)
  return {
    client: AEMHeadless,
    config: {
      serviceURL,
      endpoint,
      auth,
    },
  }
}

const { createApiClient } = apiClientFactory({
  onCreate: setup,
  api: {
    getContent,
  },
} as any)

export { createApiClient }
