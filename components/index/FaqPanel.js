import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";

export default function FaqPanel() {
  return (
    <Disclosure as="div" className="border-2 border-gray-100 rounded-lg">
      {({ open }) => (
        <>
          <Disclosure.Button
            onClick={() => console.log(isOpen)}
            className="flex items-center justify-between w-full p-8"
          >
            <h1 className="font-semibold text-gray-700">
              How i can play for my appoinment ?
            </h1>
            {open ? (
              <span className="text-gray-400 bg-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 12H6"
                  />
                </svg>
              </span>
            ) : (
              <span className="text-white bg-green-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            )}
          </Disclosure.Button>

          <hr
            className={`${open ? "border-gray-200" : "hidden border-gray-200"}`}
          />

          <Disclosure.Panel as="p" className="p-8 text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
            laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
            illo ducimus?
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
