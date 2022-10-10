import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "@/components/Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-800">
      <div className="flex space-x-4 items-center font-Ubuntu">
        <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">
          <p className="link">About</p>
        </a>
        <a href="https://chrome.google.com/webstore">
          <p className="link">Webstore</p>
        </a>
      </div>
      <div className="flex space-x-4 font-Ubuntu items-center">
        <a href="https://mail.google.com">
          <p className="link">Gmail</p>
        </a>
        <a href="https://www.google.com/imghp?hl=en">
          <p className="link">Images</p>
        </a>

        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        {/* <a href="https://myaccount.google.com/">
          <Avatar url="" />
        </a> */}
      </div>
    </header>
  );
};

export default Header;
