import { Link } from 'react-router-dom';
import cities from '../../consts/cities';
import { changeCity, getOffers } from '../../store/action';
import { useAppDispatch } from '../../hooks/useAppSelector';
import City from '../../types/city';

type CitiesListProps = {
  active: string;
};

function CitiesList({ active }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city: City, id: number) => {
              const keyValue = `${id}-${city.name}`;
              let classNames = 'locations__item-link tabs__item';
              if (active === city.name) {
                classNames += ' tabs__item--active';
              }
              return (
                <li className="locations__item" key={keyValue}>
                  <Link to="/" className={classNames} onClick={() => {
                    dispatch(changeCity(city.name));
                    dispatch(getOffers());
                  }}
                  >
                    <span>{city.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;