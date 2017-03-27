import gql from 'graphql-tag';

// Fragments

export interface Message {
  id: string;
  content: string;
}

export const messageInfoFragment = gql`
  fragment MessageInfo on Message {
    id
    content
  }
`;
