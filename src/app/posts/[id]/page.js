import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  return [{ id: "1" }];
}

const page = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const data = await res.json();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {/* <figure>
          <Image />
        </figure> */}
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.likeCount}</p>
        <Link href={`/posts`}>
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default page;
