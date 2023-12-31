import Link from "next/link";

const Navbar = (props) => {
  const { children } = props;
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/personas">Personas</Link>
        </li>
        {/* <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li> */}
      </ul>
      <div>
        {children}
      </div>
    </>
  );
};

export default Navbar;
