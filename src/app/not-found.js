import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The requested resource could not be found.</p>
      <Link href='/'>Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
