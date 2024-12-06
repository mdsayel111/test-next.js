import Link from "next/link";
import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    // cache: "force-cache"
    // cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const dataObj = await res.json();
  const data = dataObj;
  //   console.log(data);
  return (
    <div>
      <h1>posts : {data.length}</h1>
      {data.map((post, indx) => (
        <div key={indx} className="card w-96 bg-base-100 shadow-xl">
          {/* <figure>
            <Image />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>{post.likeCount}</p>
            <div className="card-actions justify-end">
              <Link href={`/posts/${post.id}`}>
                <button className="btn btn-primary">see more</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
