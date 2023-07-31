import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string ;
    containerStyles ?: string ;
    btnType ?: "button" | "reset" ;
    handleClick : MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer : string )=> void;
}