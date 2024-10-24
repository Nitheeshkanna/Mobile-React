const TableButton =(props)=>{
    return(
        <li>
            <button className={props.isSelected ? "active" : undefined} onClick={props.onselect}>{props.children}</button>
        </li>
    )
}
export default TableButton;