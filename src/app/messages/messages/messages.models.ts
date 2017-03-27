import gql from 'graphql-tag';

// Fragments

export interface Message {
  id: string;
  content: string;
}

export const messagesMessageInfoFragment = gql`
  fragment MessagesMessageInfo on Message {
    id
    content
  }
`;
