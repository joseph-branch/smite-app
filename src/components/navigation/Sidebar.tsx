import React, { useCallback, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";

import { XIcon, MenuIcon } from "@heroicons/react/solid";

const paths = [
  "Home",
  "Characters",
  "Builds",
  "Guides",
  "Tierlist",
  "Items",
  "Community",
  "About",
  "Team Composition",
];

export const Sidebar: React.FC = () => {
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

  return (
    <>
      <aside className="h-screen hidden lg:flex" aria-label="Sidebar">
        <div className="w-64 overflow-y-auto py-4 px-3 bg-color-500 flex flex-col gap-5">
          <div className="space-y-2 flex">
            <input
              type="text"
              placeholder="Search Player"
              className="flex flex-1 pl-3 py-1.5 rounded-md outline-none text-base bg-color-200 text-color-50"
            />
          </div>

          <div>
            <ul className="flex flex-col flex-1 gap-3">
              {paths.map((p, index) => (
                <div className="flex flex-1 justify-center items-center">
                  <XIcon className="h-6 w-6 cursor-pointer text-color-50" />
                  <li className="flex-1 cursor-pointer" key={`${p}-${index}`}>
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
                        <span className="ml-3 py-2">{p}</span>
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
            <Disclosure.Panel className={"bg-color-500 rounded-b"}>
              <ul className="flex flex-col flex-1 gap-3">
                {paths.map((p, index) => (
                  <li className="flex-1 cursor-pointer" key={`${p}-${index}`}>
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
                        <span className="ml-3 py-2">{p}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
