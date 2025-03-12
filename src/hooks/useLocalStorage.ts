import { useState, useEffect } from 'react';

// T는 저장할 값의 타입을 나타냅니다.
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // 로컬 스토리지에서 값을 가져오거나 초기값을 사용하는 함수
  const getStoredValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('로컬 스토리지에서 값을 가져오는 중 오류 발생:', error);
      return initialValue;
    }
  };

  // 로컬 스토리지에서 가져온 값으로 상태 초기화
  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  // 값 업데이트 함수
  const setValue = (value: T) => {
    try {
      // 리액트 상태 업데이트
      setStoredValue(value);
      // 로컬 스토리지에 값 저장
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('로컬 스토리지에 값을 저장하는 중 오류 발생:', error);
    }
  };

  // 다른 탭/창에서 로컬 스토리지가 변경될 경우 동기화
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener('storage', handleStorageChange);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage; 