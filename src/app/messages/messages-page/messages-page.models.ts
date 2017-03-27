import gql from 'graphql-tag';

import { Message, messageInfoFragment } from '../messages/messages.models';

// Fragmnets

export interface Member {
  id: string;
  name: string;
}
export const memberInfoFragment = gql`
  fragment MemberInfo on Member {
    id
    name
  }
`;

// Queries

export const ChatMembersQuery = gql`
  query getChatMembers($chat: ID!, $member: ID!) {
    Chat(id: $chat) {
      members(filter: {
        id_not: $member
      }) {
        ...MemberInfo
      }
    }
  }

  ${memberInfoFragment}
`;
export interface ChatMembersQueryResult {
  Chat: {
    members: Member[];
  };
}

export const ChatMessagesQuery = gql`
  query getChatMessages($chat: ID!) {
    allMessages(filter: {
      chat: {
        id: $chat
      }
    }) {
      ...MessageInfo
    }
  }

  ${messageInfoFragment}
`;
export interface ChatMessagesQueryResult {
  allMessages: Message[];
}

// Mutations

export const CreateMessageMutation = gql`
  mutation createMessage($author: ID!, $chat: ID!, $content: String!) {
    createMessage(authorId: $author, chatId: $chat, content: $content) {
      ...MessageInfo
    }
  }

  ${messageInfoFragment}
`;

export interface CreateMessageMutationResult {
  createMessage: Message;
}

export const DeleteChatMutation = gql`
  mutation deleteChat($chat: ID!) {
    deleteChat(id: $chat) {
      id
    }
  }
`;

// Subscriptions

export const NewMessageSubscription = gql`
  subscription getNewMessage($chat: ID!) {
    Message(filter: {
      AND: [
        { mutation_in: CREATED },
        {
          node: {
            chat: {
              id: $chat
            }
          }
        }
      ]
    }) {
      node {
        ...MessageInfo
      }
    }
  }

  ${messageInfoFragment}
`;
