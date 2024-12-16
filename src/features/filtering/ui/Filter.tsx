import styled from 'styled-components';
import { memo } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { TextField } from '@/shared/ui/TextField/TextField';

const FilterWrapper = styled('div')`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

type FilterProps = {
  value: string;
  onHandleChangeText: (value: string) => void;
  applyFilter: (newFilter: string) => void;
};

export const Filter = memo(({ value, onHandleChangeText, applyFilter }: FilterProps) => {
  const onHandleFilter = () => {
    applyFilter(value);
  };
  return (
    <FilterWrapper>
      <TextField
        type="text"
        value={value}
        onChange={(event) => onHandleChangeText(event.target.value)}
      />
      <Button onClick={onHandleFilter}>Найти</Button>
    </FilterWrapper>
  );
});
