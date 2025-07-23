import React, { useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./categoriesSlice";

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
          <AccordionTab key={category.id} header={category.name}>
            
            <p><strong>Slug:</strong> {category.slug}</p>
            <Button
              className="mt-3"
              label="View Image"
              icon="pi pi-external-link"
              onClick={() => window.open(category.image, "_blank")}
            />
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};

export default Test;
