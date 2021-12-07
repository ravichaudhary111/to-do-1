import './App.css';
import { useState } from "react"
import List from "./List"

function App() {

  const [itemList, updateItemList] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const onChangeHandler = e => {
    console.log("cv", e.target.value);
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    console.log("list item", itemList);
    setCurrentItem("");
  };
  return (
    <div className="App">

      <header className="App-header">
        <h1 >To-Do List</h1>
        <div className="wrapper">
          <div className="Input-wrapper">
            <input placeholder="Add item here" value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
