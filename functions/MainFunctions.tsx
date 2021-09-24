import AsyncStorage from '@react-native-async-storage/async-storage';

const getStorageData = async () => {
  try {
    const array = await AsyncStorage.getItem('historyArray');
    if (array !== null && JSON.parse(array).length) return JSON.parse(array);
    else return false;
  } catch (e) {
    return false;
  }
};

const updateStorageData = async (array: []) => {
  try {
    AsyncStorage.setItem('historyArray', JSON.stringify(array));
  } catch (e) {
    return false;
  }
};

export { getStorageData, updateStorageData };
