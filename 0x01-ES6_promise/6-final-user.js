import { uploadPhoto } from './utils';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    uploadPhoto(),
    signUpUser(firstName, lastName),
  ]).then((result) => console.log(result));
}
