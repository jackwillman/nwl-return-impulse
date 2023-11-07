import { Popover } from "@headlessui/react";
import tw from "tailwind-styled-components";


export const FeedbackDashboardPopover = tw(Popover)`
    relative
    flex    
`;

export const FeedbackDashboardButton = tw(Popover.Button)`
    relative
    h-full
    w-[40px]
    ml-2

    rounded
    border-transparent 
    flex-1 
    flex 
    justify-center 
    items-center 

    font-bold
    text-base
    transition-colors

    xl:text-lg

    bg-zinc-800
    border-2
    hover:border-brand-500 
    focus:border-brand-500 
    focus:outline-none
`;

export const FeedbackDashboardButtonText = tw.text`
    fixed
    -rotate-90
`;

export const FeedbackDashboardPanelStyle = tw(Popover.Panel)`
    absolute 
    z-10
    ml-[60px]
    w-[480px]
    h-[230px]
    bg-zinc-900
    rounded
    shadow-lg

`;
