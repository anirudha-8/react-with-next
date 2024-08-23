"use client";

import React, { useState } from "react";

const page = () => {
  const [marks, setMarks] = useState(88);
  return (
    <>
      <h1 className="font-bold text-xl text-blue-500">
        My total marks were: {marks}
      </h1>
      <button
        onClick={() => {
          setMarks(88.88);
        }}
        className="text-white bg-blue-500 hover-bg-blue-700 font-bold mt-2 py-2 px-4 rounded"
      >
        Update
      </button>
    </>
  );
};
export default page;
