import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

export default function UserPage() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  let { username } = useParams();
  return (
    <>
      <div>
        <hr />
        sort: {sort}
        <h2>Profile for {username}</h2>
        <Outlet />
      </div>
      <h2>User ID: {username}</h2>
      <Link to={`/users/${username}`}>User's profile</Link>
      <Link to={`/users/${username}/post`}>User's posts</Link>
      <Link to={`/users/${username}/likes`}>User's Likes</Link>
      <Outlet />
    </>
  );
}
