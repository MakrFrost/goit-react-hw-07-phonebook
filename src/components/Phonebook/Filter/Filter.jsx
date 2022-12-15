import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../redux/filerSlicer';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChange = value => {
    dispatch(change(value));
  };

  return (
    <div>
      <label>
        Find contacts by Name:
        <input
          type="text"
          value={filter}
          onChange={event => handleChange(event.target.value)}
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
