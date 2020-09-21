import Link from "next/link";

const IndexPage = () => (
  <>
    <h1>Hello First Page (CSS Modules)</h1>
    <div className="box">
      <Link href="./second">
        <a>Go Second Page</a>
      </Link>
    </div>
  </>
);

export default IndexPage;
