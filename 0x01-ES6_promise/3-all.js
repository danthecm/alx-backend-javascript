import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const uploadPhotoValue = values[0];
      const createUserValue = values[1];
      console.log(
        `${uploadPhotoValue.body} ${createUserValue.firstName} ${createUserValue.lastName}`,
      );
    })
    .catch(() => console.log('Signup system offline'));
}
