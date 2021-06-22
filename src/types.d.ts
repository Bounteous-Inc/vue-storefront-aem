declare module '@adobe/aem-headless-client-nodejs'

export interface ContentSearchParams {
  serviceURL: string
  endpoint: string
  auth: string
  query?: string
}
export interface ApiContext {
  client: any
  config: ContentSearchParams
}
