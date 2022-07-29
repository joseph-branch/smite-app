import { HomeIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useCallback, useState } from "react";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const paths = [
  "Home",
  "Characters",
  "Builds",
  // "Guides",
  "Tierlist",
  "Items",
  // "Community",
  "Team-Composition",
  "About",
];

export const Sidebar: React.FC = () => {
  const [playerSearchText, setPlayerSearchText] = useState<string>();
  const router = useRouter();

  const isActive = useCallback(
    (basePath: string) => {
      if (router.asPath === "/" && basePath === paths[0].toLowerCase()) {
        return true;
      }

      return router.asPath.includes(basePath);
    },
    [router]
  );

  const onEnter = useCallback(() => {
    if (playerSearchText?.trim() === "") return;
    router.push(`/players?p=${playerSearchText}`);
  }, [router, playerSearchText]);

  return (
    <>
      <aside className="h-screen hidden lg:flex" aria-label="Sidebar">
        <div className="w-64 overflow-y-auto py-4 px-3 bg-color-500 flex flex-col gap-5">
          <div className="space-y-2 flex">
            <input
              type="text"
              placeholder="Search Player"
              onKeyUp={onEnter}
              value={playerSearchText}
              onChange={(e) => setPlayerSearchText(e.target.value)}
              className="flex flex-1 pl-3 py-1.5 rounded-md outline-none text-base bg-color-200 text-color-50"
            />
          </div>

          <div>
            <ul className="flex flex-col flex-1 gap-3">
              {paths.map((p, index) => (
                <div className="flex " key={`${p}-${index}-web`}>
                  <li className="flex-1 cursor-pointer flex justify-center items-center">
                    <Link
                      href={`${
                        p.toLowerCase() !== paths[0].toLowerCase()
                          ? p.toLowerCase()
                          : "/"
                      }`}
                    >
                      <div
                        className={`flex flex-1 items-center text-base font-normal text-color-50 rounded-lg ${
                          isActive(p.toLowerCase())
                            ? "bg-color-300"
                            : "hover:bg-color-300"
                        }`}
                      >
                        <div className="ml-3 py-2 flex items-center">
                          <HomeIcon className="h-6 w-6 cursor-pointer text-color-50" />
                          <span className="ml-3">{p.replace("-", " ")}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <Disclosure as={"nav"} className="lg:hidden flex flex-col">
        {({ open }) => (
          <>
            <Disclosure.Button className="p-2 bg-color-500">
              {open ? (
                <XIcon className="h-6 w-6 cursor-pointer lg:hidden block text-color-50" />
              ) : (
                <MenuIcon className="h-6 w-6 cursor-pointer lg:hidden block text-color-50" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel
              className={
                "overflow-y-auto py-4 px-3 bg-color-500 flex flex-col gap-5"
              }
            >
              {({ close }) => (
                <>
                  <div className="space-y-2 flex" key={"mobile-input"}>
                    <input
                      type="text"
                      placeholder="Search Player"
                      className="flex flex-1 pl-3 py-1.5 rounded-md outline-none text-base bg-color-200 text-color-50"
                    />
                  </div>

                  <ul
                    className="flex flex-col flex-1 gap-1"
                    key={"mobile-list"}
                  >
                    {paths.map((p, index) => (
                      <li
                        className="flex-1 cursor-pointer"
                        key={`${p}-${index}-mobile`}
                        onClick={() => {
                          close();
                        }}
                      >
                        <Link
                          href={`${
                            p.toLowerCase() !== paths[0].toLowerCase()
                              ? p.toLowerCase()
                              : "/"
                          }`}
                        >
                          <div
                            className={`flex flex-1 items-center text-base font-normal text-color-50 rounded-lg ${
                              isActive(p.toLowerCase())
                                ? "bg-color-300"
                                : "hover:bg-color-300"
                            }`}
                          >
                            <span className="ml-3 py-2">
                              {p.replace("-", " ")}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
