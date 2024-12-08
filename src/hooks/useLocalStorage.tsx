const useLocalStorage = () => {
	const getItem = <T,>(key: string): T | null => {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	};

	const setItem = <T,>(key: string, value: T): void => {
		localStorage.setItem(key, JSON.stringify(value));
	};

  return { getItem, setItem };
};

export default useLocalStorage;
