import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((value) => {
    const result = [];
    value.forEach((res) => {
      if (res.status === 'rejected') {
        const { status, reason } = res;
        result.push({ status, value: `Error: ${reason.message}` });
        return;
      }
      result.push(res);
    });
    return result;
  });
}
