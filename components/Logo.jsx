import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={54} height={54} priority />
      </Link>
    </div>
  );
};

export default Logo;
