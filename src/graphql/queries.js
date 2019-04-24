// eslint-disable
// this is an auto generated file. This will be overwritten

export const getExtraUserInfo = `query GetExtraUserInfo($id: ID!) {
  getExtraUserInfo(id: $id) {
    id
    name
    gender
    somethinglist
  }
}
`;
export const listExtraUserInfos = `query ListExtraUserInfos(
  $filter: ModelExtraUserInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listExtraUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      gender
      somethinglist
    }
    nextToken
  }
}
`;
