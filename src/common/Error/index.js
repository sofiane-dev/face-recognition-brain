import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "features/appSlice";

export default function Error() {
  const error = useSelector((state) => state.app.error);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setError(""));
    };
  });

  return <p className="f4 fw6 dark-red">{error}</p>;
}
