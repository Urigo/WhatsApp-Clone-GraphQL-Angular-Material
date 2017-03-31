import gql from 'graphql-tag';

// Fragments

export interface Message {
  id: string;
  content: string;
  createdAt: Date;
  author: Author;
}

export interface Author {
  id: string;
  name: string;
}

export const messageMessageInfoFragment = gql`
  fragment MessageMessageInfo on Message {
    id
    content
    createdAt
    author {
      id
      name
    }
  }
`;
