import gql from 'graphql-tag';

// Queries

export const MembersQuery = gql`
  query getAllMembers($member: ID!) {
    allMembers(
      filter: {
        id_not: $member
      }
    ) {
      id
      name
      chats(
        filter: {
          members_some: {
            id: $member
          }
        }, first: 1
      ) {
        id
      }
    }
  }

`;

export interface MembersQueryResult {
  allMembers: Member[];
}

export interface Member {
  id: string;
  name: string;
  chats?: {id: string}[];
}
