import React from "react";
import Link from "next/link";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          className="cursor-pointer object-contain"
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Show</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            className="cursor-pointer rounded"
            src="https://rb.gy/g1pwyx"
            alt=""
          />
        </Link>
      </div>
    </header>
  );
}