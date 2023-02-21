import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "redux/filter/action";
import { selectFilters } from "redux/filter/selector";
import { selectVisiblePositions } from "redux/positions/selector";
import { JobPosition } from "./JobPosition";

export const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const addFilterHandler = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          addFilterHandler={addFilterHandler}
        />
      ))}
    </div>
  );
};
