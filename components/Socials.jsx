"use client";
import React from "react";
import {
  RiInstagramFill,
  RiGithubFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  { path: "/linkedin.com.in.samarth/1002", name: <RiLinkedinFill /> },
  { path: "/github.com/SamarthanandKamble", name: <RiGithubFill /> },
  { path: "/twitter", name: <RiTwitterFill /> },
  { path: "/insta", name: <RiInstagramFill /> },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon) => (
        <Link key={icon.path} href={`${icon.path}`}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
