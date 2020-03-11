import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage();
}