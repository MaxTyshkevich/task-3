import styled from 'styled-components';
import { Profile } from '../../modal/types/profile';

const Cell = styled('td')`
  padding: 0.5rem;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
`;

const Row = styled('tr').withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>`
  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? '#5cb85c' : 'transparent')};
  &:hover {
    background: ${({ isSelected }) => (isSelected ? '#5cb85c' : '#f0f0f0')};
  }
`;
export const TableRow = ({
  profile,
  onHandleSelectedProfle,
  isSelected,
}: {
  profile: Profile;
  isSelected: boolean;
  onHandleSelectedProfle: (profile: Profile) => void;
}) => {
  return (
    <Row onClick={() => onHandleSelectedProfle(profile)} isSelected={isSelected}>
      <Cell>{profile.id}</Cell>
      <Cell>{profile.firstName}</Cell>
      <Cell>{profile.lastName}</Cell>
      <Cell>{profile.email}</Cell>
      <Cell>{profile.phone}</Cell>
    </Row>
  );
};
