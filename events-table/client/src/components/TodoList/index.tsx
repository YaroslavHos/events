import React from "react";

interface IListItem {
    singleItem: string
}
interface ITodoList {
    items: IListItem[]
}
const TodoList: React.FC<ITodoList> = (props) => {
    const {items} = props
    return (<div>
        <ul><li>

        </li></ul>
    </div>)

}

export default TodoList;