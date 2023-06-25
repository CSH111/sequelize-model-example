import { useRouter } from "next/router";
import React, { useEffect } from "react";

const My = () => {
  const router = useRouter();
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    // console.log(router``);
    const newPath = router.pathname.replace("[num]", e.target.value);
    // router.push(router.asPath.replace("[num]", e.target.value));
    router.push(newPath);
  };
  console.log(router);
  useEffect(() => {
    console.log(router);
    // router.replace(router.asPath);
  }, []);

  return (
    <div>
      <select name="" id="" value={router.query.num} onChange={handleChange}>
        <option value="11">aaaaa</option>
        <option value="22">bbbbbbbbbb</option>
        <option value="33">cccccccccccc</option>
        <option value="44">ddddddddddddd</option>
      </select>
    </div>
  );
};

export default My;
