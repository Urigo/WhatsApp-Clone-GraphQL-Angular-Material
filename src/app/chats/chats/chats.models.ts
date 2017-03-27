import gql from 'graphql-tag';

// Fragments

export const chatsMessageInfoFragment = gql`
  fragment ChatsMessageInfo on Message {
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

export const chatsMemberInfoFragment = gql`
  fragment ChatsMemberInfo on Member {
    id
    name
  }
`;
export interface Member {
  id: string;
  name: string;
}


export const chatsChatInfoFragment = gql`
  fragment ChatsChatInfo on Chat {
    id
    messages(last: 1) {
      ...ChatsMessageInfo
    }
  }

  ${chatsMessageInfoFragment}
`;
export interface Chat {
  id: string;
  members: Member[];
  messages: Message[];
}
