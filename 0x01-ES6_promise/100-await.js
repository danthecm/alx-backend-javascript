import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {};
  try {
    const uploadResult = await uploadPhoto();
    result.photo = uploadResult;
  } catch (e) {
    result.photo = null;
  }

  try {
    const createUserResult = await createUser();
    result.user = createUserResult;
  } catch (e) {
    result.user = null;
  }
  return result;
}
