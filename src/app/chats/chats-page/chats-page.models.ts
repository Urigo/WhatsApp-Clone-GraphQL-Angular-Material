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
    allChats(
      filter: {
        members_some: {
          id: $member
        }
      },
      orderBy: createdAt_DESC
    ) {
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
  subscription getNewChat($member: ID!) {
    Chat(
      filter: {
        AND: [{
          mutation_in: CREATED
        }, {
          node: {
            members_some: {
              id: $member
            }
          }
        }]
      }
    ) {
      node {
        members(filter: {
          id_not: $member
        }) {
          ...ChatsMemberInfo
        }
        ...ChatsChatInfo
      }
    }
  }

  ${chatsChatInfoFragment}
  ${chatsMemberInfoFragment}
`;

export const DeletedChatSubscription = gql`
  subscription getDeletedChat($member: ID!) {
    Chat(
      filter: {
        AND: [{
          mutation_in: DELETED
        }, {
          node: {
            members_some: {
              id: $member
            }
          }
        }]
      }
    ) {
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
