"use client";
import React, { Fragment, useState } from "react";
import { Transition, Listbox } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({
  title,
  options,
}: {
  title: string;
  options: { title: string; value: string }[];
}) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams=(e:{title: string , value:string})=>{
    const newPathName= updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName , {scroll:false});
  }

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => {setSelected(e); handleUpdateParams(e);}}>
        <div className="relative z-10 w-fit">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron"
              width={20}
              height={20}
              className="object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `py-2 px-3 cursor-pointer relative ${
                      active
                        ? "bg-primary-blue text-white"
                        : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => <span>{option.title}</span>}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
