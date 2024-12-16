import { Profile } from '../../modal/types/profile';
import SortableTableHeader from './SortableTableHeader';
import styled from 'styled-components';
import { TableRow } from './TableRow';
import { memo, useMemo } from 'react';
import { SortOrder } from '@/features/sorting';

const TableWrapper = styled('div')`
  width: 100%;
  display: flex;
`;

const TableUI = styled('table')`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`;

export const Table = memo(
  ({
    profiles,
    handleSort,
    onHandleSelectedProfle,
    sortColumn,
    sortOrder,
    selectedProfile,
  }: {
    profiles: Profile[];
    handleSort: (column: keyof Profile) => void;
    onHandleSelectedProfle: (profile: Profile | null) => void;
    sortColumn: keyof Profile | null;
    sortOrder: SortOrder;
    selectedProfile: Profile | null;
  }) => {
    const TableHeader = useMemo(
      () =>
        ['id', 'firstName', 'lastName', 'email', 'phone'].map((column) => (
          <SortableTableHeader
            key={column}
            column={column}
            handleSort={handleSort}
            isSelected={column === sortColumn}
            sortOrder={sortOrder}
          />
        )),
      [handleSort, sortColumn, sortOrder],
    );

    return (
      <TableWrapper>
        <TableUI>
          <thead>
            <tr>{TableHeader}</tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <TableRow
                key={JSON.stringify(profile)}
                profile={profile}
                onHandleSelectedProfle={onHandleSelectedProfle}
                isSelected={selectedProfile?.id === profile.id}
              />
            ))}
          </tbody>
        </TableUI>
      </TableWrapper>
    );
  },
);
