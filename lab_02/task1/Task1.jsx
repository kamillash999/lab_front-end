import React from "react";
import FragmentLayout from "./FragmentLayout";
import ItemList from "./ItemList";

const Task1 = () => {
    return (
        <>
          <FragmentLayout />
          <hr />
          <h2>list of Items:</h2>
          <ItemList />

        </>
    );
};

export default Task1;
