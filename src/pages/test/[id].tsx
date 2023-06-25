import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const xx = {
  asdf: 23,
};

function TestPage(props: any) {
  const router = useRouter();
  const { query } = router;
  // axios.get("/api/test/");
  return (
    <div>
      <div>
        <div>현재 페이지: {query.id}</div>
        <div>api-리스폰스: {}</div>
        <div>
          <Link href={"/test/1"}>1111</Link>
        </div>
        <div>
          <Link href={"/test/2"}>22222</Link>
        </div>
        <div>
          <Link href={"/test/3"}>3333</Link>
        </div>
        <div>
          <div
            onClick={() => {
              router.push("/test/4");
            }}
          >
            44
          </div>
          <Link href={"/test/4"}>4444</Link>
        </div>
        <br />
        {/* <CSRComp key={query.id?.toString()} /> */}
        <CSRComp />

        {/* <div>{props.xx}</div> */}
        {/* <CSRComp /> */}
        {/* <button
          onClick={() => {
            console.log(router.asPath);
            router.push(router.asPath);
          }}
        >
          리패치
        </button> */}
      </div>
    </div>
  );
}

export default TestPage;

function CSRComp() {
  const {
    query: { id: _id },
  } = useRouter();
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [result, setResult] = useState();

  useEffect(() => {
    (async () => {
      setCount(0);
      // const res = await axios.get(`/api/test/${_id}`);
      const res = await axios.get(
        `/api/test/${_id}?sleep=${Math.floor(Math.random() * 1500 + 500)}`
      );
      setResult(res.data.result);
    })();
  }, [_id]);
  // console.log("result:", result);
  // console.log("result == 'undefined'", result == "undefined");
  return (
    <div>
      <div>CRS컴프</div>
      <button
        onClick={(e) => {
          setCount((c) => c + 1);
        }}
      >
        버튼1: {count}
      </button>
      <button
        onClick={(e) => {
          setCount1((c) => c + 1);
        }}
      >
        버튼2: {count1}
      </button>
      <button
        onClick={(e) => {
          setCount2((c) => c + 1);
        }}
      >
        버튼3: {count2}
      </button>
      <div>api 결과: {!result ? "loading..." : result}</div>
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const res = await axios.get("http://localhost:3000/api/random");
  console.log(res);
  // console.log(res);
  return { props: { xx: res.data.result } };
}
