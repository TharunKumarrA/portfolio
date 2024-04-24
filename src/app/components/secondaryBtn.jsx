

export default function SecondaryBtn({ text, onclickHandler }) {
  return (
    <div>
      <div
        className="bg-background text-primary rounded-full py-4 px-8 m-4 text-link hover:cursor-pointer hover:scale-[101%] active:bg-primary active:text-background border-2 border-background transition duration-150 ease-in-out flex justify-center items-center w-full"
        onClick={onclickHandler}
      >
        {text}
      </div>
    </div>
  );
}
