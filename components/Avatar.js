import Image from "next/image";

const Avatar = ({ url }) => {
  return (
    <Image
      loading="lazy"
      className={`h-11 rounded-full cursor-pointer transition duration-150 transform hover:scale-110`}
      src={url}
      alt="profile pic"
      width="30w"
      height="30h"
    />
  );
};

export default Avatar;
