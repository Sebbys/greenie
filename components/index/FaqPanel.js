import { Disclosure } from "@headlessui/react";
import { Icon } from "@iconify/react";

const FaqPanel = (props) => {
  return (
    <Disclosure as="div" className="border-2 border-gray-100 rounded-lg">
      {({ open }) => (
        <>
          <Disclosure.Button
            onClick={() => console.log(isOpen)}
            className="flex items-center justify-between w-full p-8"
          >
            <h1 className="font-semibold text-gray-700">{props.question}</h1>
            {open ? (
              <span className="bg-white-200 rounded-full">
                <Icon
                  icon="akar-icons:circle-minus-fill"
                  color="#A1A1AA"
                  width="24"
                  height="24"
                />
              </span>
            ) : (
              <span className="bg-white rounded-full">
                <Icon
                  icon="akar-icons:circle-plus-fill"
                  color="#22c55e"
                  width="24"
                  height="24"
                />
              </span>
            )}
          </Disclosure.Button>

          <hr
            className={`${open ? "border-gray-200" : "hidden border-gray-200"}`}
          />

          <Disclosure.Panel as="p" className="p-8 text-sm text-gray-500">
            {props.answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FaqPanel;
