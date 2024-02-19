import { useSearchParams } from 'react-router-dom';

export default function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setFilter = (value) => {
    setSearchParams({ category: value });
  };

  const getFilter = () => searchParams.get('category')?.split('#')[1];

  return {
    setFilter,
    getFilter,
  };
}
