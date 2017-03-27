import gql from 'graphql-tag';

import {
  Chat,
  Message,
  chatsMessageInfoFragment,
  chatsChatInfoFragment,
  chatsMemberInfoFragment,
} from '../chats/chats.models';

// Queries

export const AllChatsQuery = gql`
  query getAllChats($member: ID!) {
    allChats(filter: {
      members_some: {
        id: $member
      }
    }) {
      members(filter: {
        id_not: $member
      }) {
        ...ChatsMemberInfo
      }
      ...ChatsChatInfo
    }
  }

  ${chatsChatInfoFragment}
  ${chatsMemberInfoFragment}
`;
export interface AllChatsQueryResult {
  allChats: Chat[];
}

// Subscriptions

export const NewChatSubscription = gql`
  subscription getNewChat {
    Chat(filter: { mutation_in: CREATED }) {
      node {
        ...ChatsChatInfo
      }
    }
  }

  ${chatsChatInfoFragment}
`;

export const NewChatMessageSubscription = gql`
  subscription getNewChatMessage($chats: [ID!]!) {
    Message(filter: {
      AND: [
        { mutation_in: CREATED },
        { node: { chat: { id_in: $chats } } }
      ]
    }) {
      node {
        ...ChatsMessageInfo
        chat {
          id
        }
      }
    }
  }

  ${chatsMessageInfoFragment}
`;
