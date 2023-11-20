import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAdverts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchAllAdverts } from '../../redux/operations';
import AdvertsList from 'components/advertsList/AdvertsList';
import ButtonLoadMore from 'components/buttonLoadMore/ButtonLoadMore';

const Catalog = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleClickLoadMore = () => {
    dispatch(fetchAllAdverts(page + 1));
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchAllAdverts(page));
  }, [dispatch, page]);

  return (
    <div style={{ marginTop: '100px' }}>
      {isLoading && <b>Loading adverts...</b>}
      {error && <b>{error}</b>}
      {adverts && <AdvertsList adverts={adverts} />}
      {adverts.length ? (
        <ButtonLoadMore
          handleClickLoadMore={handleClickLoadMore}
          path={'/catalog'}
        />
      ) : ""}
    </div>
  );
};

export default Catalog;
