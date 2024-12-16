import { useCallback, useState } from 'react';
import { Profile } from '../../../entities/profile/modal/types/profile';

export const useTableFiltering = (data: Profile[], filterKeys: (keyof Profile)[]) => {
  const [filter, setFilter] = useState<string>('');

  const filteredData = filter
    ? data.filter((row) =>
        filterKeys.some((key) => String(row[key]).toLowerCase().includes(filter.toLowerCase())),
      )
    : data;

  const applyFilter = useCallback((newFilter: string) => {
    setFilter(newFilter);
  }, []);

  return { filteredData, applyFilter };
};
