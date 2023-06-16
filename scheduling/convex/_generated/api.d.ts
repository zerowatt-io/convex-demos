/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.17.0.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { ApiFromModules } from "convex/server";
import type * as listMessages from "../listMessages";
import type * as sendExpiringMessage from "../sendExpiringMessage";
import type * as sendMessage from "../sendMessage";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: ApiFromModules<{
  listMessages: typeof listMessages;
  sendExpiringMessage: typeof sendExpiringMessage;
  sendMessage: typeof sendMessage;
}>;
