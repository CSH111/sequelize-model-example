import { useRouter } from "next/router";
import React from "react";

import { MySelect } from "@/components";
// import styled from 'styled-components';

const Detail = () => {
  const router = useRouter();
  return (
    <div>
      <MySelect />
      <div>{router.query.num}</div>

      <select name="" id="" value="4">
        <option value="1">ff</option>
        <option value="2">ttt</option>
        <option value="3">hhhh`</option>
        <option value="4">bbbbb</option>
      </select>
    </div>
  );
};

export default Detail;
