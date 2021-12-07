import "./List.css";

function List(props) {

    const deleteItemFromList = key => {
        const newList = props.itemList.filter(itemObj => {
            return itemObj.key !== key;
        });
        props.updateItemList(newList);
    };
    return (
        <div>
            {props.itemList.map(itemObj => {

                return (
                    <div key={itemObj.key} className="item">
                        <p>{itemObj.item}</p>
                        <button onClick={() => deleteItemFromList(itemObj.key)}>X</button>
                    </div>
                )
            })}
        </div>
    );
}

export default List;