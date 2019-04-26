// eslint-disable
// this is an auto generated file. This will be overwritten

export const createExtraUserInfo = `mutation CreateExtraUserInfo($input: CreateExtraUserInfoInput!) {
  createExtraUserInfo(input: $input) {
    id
    name
    gender
    somethinglist
  }
}
`;
export const updateExtraUserInfo = `mutation UpdateExtraUserInfo($input: UpdateExtraUserInfoInput!) {
  updateExtraUserInfo(input: $input) {
    id
    name
    gender
    somethinglist
  }
}
`;
export const deleteExtraUserInfo = `mutation DeleteExtraUserInfo($input: DeleteExtraUserInfoInput!) {
  deleteExtraUserInfo(input: $input) {
    id
    name
    gender
    somethinglist
  }
}
`;
export const createPicture = `mutation CreatePicture($input: CreatePictureInput!) {
  createPicture(input: $input) {
    id
    userId
    username
    file {
      bucket
      region
      key
      uri
    }
  }
}
`;
export const updatePicture = `mutation UpdatePicture($input: UpdatePictureInput!) {
  updatePicture(input: $input) {
    id
    userId
    username
    file {
      bucket
      region
      key
      uri
    }
  }
}
`;
export const deletePicture = `mutation DeletePicture($input: DeletePictureInput!) {
  deletePicture(input: $input) {
    id
    userId
    username
    file {
      bucket
      region
      key
      uri
    }
  }
}
`;
