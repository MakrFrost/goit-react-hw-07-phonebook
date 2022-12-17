import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filerSlicer';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.query);

  const handleChange = value => {
    console.log('value:', value);
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <label>
        Find contacts by Name:
        <input
          type="text"
          value={filter}
          onChange={e => handleChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
