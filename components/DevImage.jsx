import Image from "next/image";

const DevImage = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image 
      height={462}
      width={510}
      src={imgSrc} priority alt="dev-img" />
    </div>
  );
};

export default DevImage;
