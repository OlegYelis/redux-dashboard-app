import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPosition } from "redux/positions/action";
import data from "./mock/data.json";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPosition(data));
  });
  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
};
