import { useDispatch, useSelector } from "react-redux";

import { incremented, decremented } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);

  return (
    <div>
      <div className="text-2xl text-red-500">count:{count}</div>
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(incremented())}
        >
          +1
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decremented())}
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default App;
