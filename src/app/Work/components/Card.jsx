import Image from "next/image";

export default function Card({
  certificateImage,
  certificateTitle,
  certificateDescription,
}) {
  return (
    <div className="flex flex-col justify-center items-center  border-2 border-b-primary rounded-2xl">
      <div
        className="bg-secondary border-2 border-b-primary rounded-2xl m-4 mb-2 relative mx-8"
        style={{ width: "400px", height: "300px" }}
      >
        <Image
          src={certificateImage}
          alt={certificateTitle}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="text-subtitle flex justify-center items-center">
          {certificateTitle}
        </div>
        <div className="text-para flex justify-center items-center">
          {certificateDescription}
        </div>
      </div>
    </div>
  );
}
