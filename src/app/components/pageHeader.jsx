import NavBar from "./navbar";

function PageHeader({ title }) {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center w-full h-24 text-title font-light">
        {title}
      </div>
    </>
  );
}

export default PageHeader;