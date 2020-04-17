/**
 * DEV API (beta)
 * Access DEV articles, users and other resources via API.  All endpoints that don't require authentication are CORS enabled.  Dates and date times, unless otherwise specified, must be in the [RFC 3339](https://tools.ietf.org/html/rfc3339) format.  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 0.7.0
 * Contact: yo@dev.to
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface WebhookCreateWebhookEndpoint {
    /**
     * The name of the requester, eg. \"DEV\"
     */
  source: string
  targetUrl: string
    /**
     * An array of events identifiers
     */
  events: Array<string>
}
