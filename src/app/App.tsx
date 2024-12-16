import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProfiles, Table, Profile, DetailProfile } from '../entities/profile';
import { Filter, useTableFiltering } from '../features/filtering';
import { useTableSortProfiles } from '../features/sorting';

const AppWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

function App() {
  const [data, setData] = useState<Profile[]>([]);
  const [isloading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState<string>('');
  //selected profile
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  // sorting profiles
  const { sortedData, handleSort, sortColumn, sortOrder } = useTableSortProfiles(data);

  // filter profiles
  const { filteredData, applyFilter } = useTableFiltering(sortedData, [
    'firstName',
    'lastName',
    'email',
    'phone',
  ]);

  useEffect(() => {
    setIsloading(true);
    getProfiles()
      .then((result) => {
        setData(result);
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
          return;
        }
        setError(`Произошла непредвиденная ошибка!`);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  const onHandleChangeText = useCallback((value: string) => {
    setText(value);
  }, []);

  const onHandleSelectedProfle = useCallback((profile: Profile | null) => {
    setSelectedProfile((prevProfile) => (prevProfile?.id === profile?.id ? null : profile));
  }, []);

  if (isloading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <AppWrapper>
      <Filter value={text} onHandleChangeText={onHandleChangeText} applyFilter={applyFilter} />
      <Table
        profiles={filteredData}
        handleSort={handleSort}
        sortColumn={sortColumn}
        sortOrder={sortOrder}
        onHandleSelectedProfle={onHandleSelectedProfle}
        selectedProfile={selectedProfile}
      />
      {selectedProfile && <DetailProfile profile={selectedProfile} />}
    </AppWrapper>
  );
}

export default App;
