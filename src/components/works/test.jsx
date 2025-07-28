import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./categoriesSlice";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";

const Test = () => {
  const dispatch = useDispatch();
  const { data: categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div id="works" className="main-section">
      <h1>Works</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Accordion multiple activeIndex={[0]}>
        {categories.map((category) => (
          <AccordionTab key={category._id} header={category.name}>
            <p><strong>Created At:</strong> {new Date(category.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(category.updatedAt).toLocaleString()}</p>
            <Button
              label="Details"
              icon="pi pi-info-circle"
              className="p-button-sm p-button-text"
              onClick={() => alert(`Category: ${category.name}`)}
            />
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};

export default Test;

