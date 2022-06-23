import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./ListOfCategory.style";
// import { categories, mockCategories } from "../../../api/db.json";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    window.fetch("https://petgram-server-24iykciv5.now.sh/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  useEffect(function (){
    const onScroll = () =>{
      const newShowFixed = window.scrollY > 200
      showFixed != newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  },[showFixed])

  const renderList = (fixed) => (
    <List className= {fixed ? 'fixed' : ''}>
      {categories.map((category) =>
        <Item
          key={category.id}
          className= {fixed ? 'fixed' : ''}>
          <Category {...category} />
        </Item>
      )}
    </List>
  )
  return (
    <>
    {renderList()}
    {!!showFixed && renderList(true)}
    </>
  );
};
