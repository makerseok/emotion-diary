import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const Navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id", id);

  const mode = searchParams.get("mode");
  console.log("mode", id);

  return (
    <div>
      <h1>Edit</h1>
      <button
        onClick={() => {
          setSearchParams({ who: "makerseok" });
        }}
      >
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          Navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          Navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
