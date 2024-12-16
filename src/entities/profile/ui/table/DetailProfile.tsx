import styled from 'styled-components';
import { Profile } from '../../modal/types/profile';

type DetailProfileProps = {
  profile: Profile;
};
const DetailProfileWrapper = styled('div')`
  padding: 1rem;
  border: 2px solid #5cb85c;
  border-radius: 1rem;
  background: #5cb85c;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NameField = styled('span')`
  font-weight: 600;
`;

export const DetailProfile = ({ profile }: DetailProfileProps) => {
  return (
    <DetailProfileWrapper>
      <h3>Детали с пользователя:</h3>

      <p>
        <NameField>ID:</NameField> {profile.id}
      </p>
      <p>
        <NameField>Имя:</NameField> {profile.firstName} {profile.lastName}
      </p>
      <p>
        <NameField>Email:</NameField> {profile.email}
      </p>
      <p>
        <NameField>Телефон:</NameField> {profile.phone}
      </p>
      <p>
        <NameField>Адрес:</NameField> {profile.address.streetAddress}, {profile.address.city},{' '}
        {profile.address.state} {profile.address.zip}
      </p>
      <p>
        <NameField>Описание:</NameField> {profile.description}
      </p>
    </DetailProfileWrapper>
  );
};
