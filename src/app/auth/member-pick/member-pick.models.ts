import gql from 'graphql-tag';

export const AllMembersQuery = gql`
  query getAllMembers {
    allMembers {
      id
      name
    }
  }
`;

export interface AllMembersQueryResult {
  allMembers: Member[];
}

export interface Member {
  id: string;
  name: string;
}

