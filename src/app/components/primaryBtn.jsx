export default function PrimaryBtn({ text, onclickHandler }) {
  return (
    <div>
      <div
        className="flex justify-center items-center bg-primary text-background rounded-full py-4 px-8 m-4 text-link hover:cursor-pointer hover:scale-105 active:bg-background active:text-primary border-2 border-primary transition duration-150 ease-in-out "
        onClick={onclickHandler}
      >
        {text}
      </div>
    </div>
  );
}
