import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/meetp0133")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("data", data);
  //         setData(data);
  //       });
  //   },[]);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 ">
      Github followers : {data?.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/meetp0133");
  return await response.json();
};
