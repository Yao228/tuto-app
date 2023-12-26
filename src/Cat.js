import React from 'react';
import {Text} from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};
const Cat = () => {
  const name = "Milou"
  return (
    <Text>Hello, I am {getFullName('Yao', 'Mawunyo', 'AMEDEKPEDZI')}</Text>
  )
}

export default Cat