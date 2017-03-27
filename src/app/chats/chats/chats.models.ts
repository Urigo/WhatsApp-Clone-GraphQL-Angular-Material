import gql from 'graphql-tag';

// Fragments

export const messageInfoFragment = gql`
  fragment MessageInfo on Message {
    content
    author {
      id
    }
  }
`;
export interface Message {
  content: string;
  author: {
    id: string;
  };
}

export const memberInfoFragment = gql`
  fragment MemberInfo on Member {
    id
    name
  }
`;
export interface Member {
  id: string;
  name: string;
}


export const chatInfoFragment = gql`
  fragment ChatInfo on Chat {
    id
    messages(last: 1) {
      ...MessageInfo
    }
  }

  ${messageInfoFragment}
`;
export interface Chat {
  id: string;
  members: Member[];
  messages: Message[];
}
