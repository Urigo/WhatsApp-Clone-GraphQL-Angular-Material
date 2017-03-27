import gql from 'graphql-tag';

import {
  messagesPageMemberInfoFragment,
  Member,
} from '../../messages/messages-page/messages-page.models';

// Queries

export const MemberQuery = gql`
  query getMember($member: ID!) {
    Member(id: $member) {
      name
    }
  }
`;
export interface MemberQueryResult {
  Member: {
    name: string;
  };
}

// Mutations

export const CreateChatMutation = gql`
  mutation createChat($members: [ID!]!, $author: ID!, $message: String!) {
    createChat(
      membersIds: $members, 
      messages: [{
        content: $message,
        authorId: $author
      }]
    ){
      id
      members(filter: {
        id_not: $author
      }) {
        ...MessagesPageMemberInfo
      }
    }
  }

  ${messagesPageMemberInfoFragment}
`;

export interface Chat {
  id: string;
  members: Member[];
}

export interface CreateChatMutationResult {
  createChat: Chat;
}
