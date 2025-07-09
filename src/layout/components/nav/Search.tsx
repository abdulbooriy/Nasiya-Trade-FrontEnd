import React, { useEffect, useState, type ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "antd";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useParamsHook } from "@/shared/hooks/useParamsHook";

const allowedFirstPath = ["CUSTOMER", "SELLER", "product"];
const allowedSecondPath = ["active", "archive", "disabled"];

const SearchSeaction = () => {
  const { pathname } = useLocation();
  const { setParam, removeParam, getParam } = useParamsHook();
  const search = getParam("search") || "";
  const [inputValue, setInputValue] = useState<string>(search);
  const firstPath = pathname.split("/")[1] || "CUSTOMER";
  const secondePath = pathname.split("/")[2] || "active";
  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    if (debouncedValue) {
      setParam("search", debouncedValue);
    } else {
      removeParam("search");
    }
  }, [debouncedValue]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      {allowedFirstPath.includes(firstPath) &&
      allowedSecondPath.includes(secondePath) ? (
        <Input.Search
          style={{ width: 400 }}
          placeholder={`${
            firstPath === "CUSTOMER" ? "Mijoz" : "Sotuvchi"
          } qidirish...`}
          onChange={handleSearch}
          value={inputValue}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default React.memo(SearchSeaction);
