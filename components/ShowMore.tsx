"use client";
import React from "react";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {

    const newPathName= updateSearchParams('limit', `${(pageNumber+1)*10}`);

    router.push(newPathName ,{scroll : false} );
  };
  return (
    <div className="w-full flex justify-center text-center mt-8">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full p-1"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
