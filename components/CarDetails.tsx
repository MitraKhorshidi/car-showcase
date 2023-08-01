import React, { Fragment } from "react";
import { carProps } from "@/types";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";

interface CarDetailsProps {
  car: carProps;
  isOpen: boolean;
  closeModal: () => void;
}

const CarDetails = ({ car, closeModal, isOpen }: CarDetailsProps) => {
  const {
    city_mpg,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;
  return (
    <>
      <Transition as={Fragment} show={isOpen} appear>
        <Dialog open={isOpen} onClose={closeModal} className="relative z-10">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-black fixed bg-opacity-25 inset-0"></div>
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="p-4 min-h-full flex justify-center items-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              ></Transition.Child>
              <Dialog.Panel className="flex flex-col justify-center bg-white max-h-[90vh]">
                <button onClick={closeModal}>
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
                {Object.entries(car).map(([key, value]) => (
                  <div className="flex flex-row justify-between" key={key}>
                    <h4 className="capitalize">{key.split("_").join(" ")}</h4>
                    <p>{value}</p>
                  </div>
                ))}
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
