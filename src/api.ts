import { ApiContext, ContentSearchParams } from './types'
import { Logger } from '@vue-storefront/core'

/*
  This is where most of the action is happening.
  We're initializing the AEMHeadless client with the configs
  from the middlware and are then running a GraphQL query.
*/
export const getContent = async (
  { client, config }: ApiContext,
  { query }: ContentSearchParams,
): Promise<any> => {
  const { serviceURL, endpoint, auth } = config
  const AEM = new client({
    serviceURL: serviceURL,
    endpoint: endpoint,
    auth: auth,
  })
  let response = null
  try {
    // Run GraphQL query against AEM instance:
    const { data } = await AEM.runQuery(query)
    Logger.debug('Data returned from API:', data)
    response = data
  } catch (error) {
    Logger.error('Error getting data from AEM.', error)
  }
  return response
}
