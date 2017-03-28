import gql from 'graphql-tag';

export const UserQuery = gql`
  query getMember($name: String!) {
    allMembers(
      filter: {
        name: $name
      },
      first: 1
    ) {
      id
      name
    }
  }
`;

export interface UserQueryResult {
  allMembers: Member[];
}

export interface Member {
  id: string;
  name: string;
}

export interface Credentials {
  name: string;
  password: string;
}
