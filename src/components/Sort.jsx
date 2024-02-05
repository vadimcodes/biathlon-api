import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

const list = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'сначала дешевле', sortProperty: '-price' },
  { name: 'сначала дороже', sortProperty: 'price' },
  { name: 'алфавиту (по возрастанию)', sortProperty: '-title' },
  { name: 'алфавиту (по убыванию)', sortProperty: 'title' },
];

function Sort() {
  const sortRef = React.useRef();
  const dispath = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [openSort, setOpenSort] = React.useState(false);
  const onClickListItem = (obj) => {
    dispath(setSort(obj));
    setOpenSort(false);
  };

  // закрытие сортировки вне ее блока
  React.useEffect(() => {
    const clickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpenSort(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="shop__sort sort">
      <div className="sort__label">
        <p className="sort__descr">
          сортировать по: <span onClick={() => setOpenSort(!openSort)}>{sort.name}</span>
        </p>
      </div>

      {openSort && (
        <div className="sort-popup">
          <ul className="sort-popup__list list-reset">
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                // className="sort-popup__item"
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
