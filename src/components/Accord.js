import React, { useState } from "react";
import "../components/Accord.css";
import Data from "./Data";
import { Questions } from "./Questions";

export const Accord = () => {
  let [data, setData] = useState(Data);

  return (
    <>
      <main>
        <div className="container">
          <h3> Here is Questions and there Answers </h3>
          <section className="info">
            {data.map((item) => {
              return <Questions key={item.id} {...item} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
};
