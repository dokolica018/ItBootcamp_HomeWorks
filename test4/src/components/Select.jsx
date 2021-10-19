// import { useState } from "react";

const Select = ({setSelect}) => {
    
    return (
        <div className='mx-2'>
            <select name="" id="" onChange={(e) => {
                setSelect(e.target.value)

            }}>
                <option defaultValue='0' >All</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </div>
    );
}

export default Select;