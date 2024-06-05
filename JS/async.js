// https://jsonplaceholder.typicode.com/users/1
// user의 이름을 구하는 함수를 작성하시오.

const URL = 'https://jsonplaceholder.typicode.com';

// async function getUserName() { }

const getUserName = async (userId) => {
  const res = await fetch(`${URL}/users/${userId}`);

  //   console.log('🚀 ~ getUserName ~ res:', res);
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve('OK'), 2000);
  });
  const data = await res.json();
  //   console.log('🚀 ~ getUserName ~ data:', data);
  return data?.name;
};

console.log('1번 유저명: ', await getUserName(1));
