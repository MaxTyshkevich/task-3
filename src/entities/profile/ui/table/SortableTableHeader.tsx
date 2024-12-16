import styled from 'styled-components';
import { Profile } from '../../modal/types/profile';
import { SortOrder } from '../../../../features/sorting/modal/useTableSortProfiles/useTableSortProfiles';

const HeadCell = styled('th').withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>`
  position: relative;
  background: ${({ isSelected }) => (isSelected ? '#5cb85c' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  padding: 0.5rem 1.3rem 0.5rem 0.5rem;
  cursor: pointer;
  border: 1px solid black;
  border-collapse: collapse;
  text-transform: capitalize;
`;

const IndicatorSort = styled('span')`
  position: absolute;
  top: 50%;
  right: px;
  transform: translateY(-50%);
`;

const SortableTableHeader = ({
  column,
  handleSort,
  isSelected,
  sortOrder,
}: {
  column: string;
  handleSort: (column: keyof Profile) => void;
  isSelected: boolean;
  sortOrder: SortOrder;
}) => {
  return (
    <HeadCell onClick={() => handleSort(column as keyof Profile)} isSelected={isSelected}>
      {column}
      {isSelected && <IndicatorSort>{sortOrder === 'asc' ? '▲' : '▼'}</IndicatorSort>}
    </HeadCell>
  );
};

export default SortableTableHeader;
