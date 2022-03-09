/* eslint-disable */
// Generated by @convex-dev/cli@0.0.51
// based on the contents of this directory
import type addChannel from "./addChannel";
import type listChannels from "./listChannels";
import type listMessages from "./listMessages";
import type sendMessage from "./sendMessage";

type ConvexAPI = {
  queries: {
    listChannels: typeof listChannels;
    listMessages: typeof listMessages;
  };
  mutations: {
    addChannel: typeof addChannel;
    sendMessage: typeof sendMessage;
  };
};

import {
  makeUseQuery,
  makeUseMutation,
  makeUseConvex,
} from "@convex-dev/react";

export const useQuery = makeUseQuery<ConvexAPI>();
export const useMutation = makeUseMutation<ConvexAPI>();
export const useConvex = makeUseConvex<ConvexAPI>();