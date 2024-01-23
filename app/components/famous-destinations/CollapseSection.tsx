'use client'

interface TCollapseSection {
    day: string;
    date: string
}

import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import EventCard from "./EventCard";

export default function CollapseSection({ day, date }: TCollapseSection) {
    const [open, setOpen] = useState(false);
    return (
        <div className='shadow rounded-2xl'>
            <div onClick={() => setOpen(prev => (!prev))} className={`w-full flex items-center justify-between px-6 py-4 cursor-pointer ${open ? "rounded-t-2xl bg-[#F1F1F1]" : "rounded-2xl bg-white hover:bg-[#F1F1F1]"}`}>
                <div className='flex items-center gap-8'>
                    <p className="text-lg font-bold text-textDark">{day}</p>
                    <p className="text-textGrey">{date}</p>
                </div>
                {
                    open ?
                        <SlArrowUp className="text-textDark text-lg" />
                        :
                        <SlArrowDown className="text-textDark text-lg" />
                }
            </div>
            {
                open &&
                <div className='p-6 w-full rounded-b-2xl'>
                    {/* this is top section for tab  */}
                    <div className='flex items-center justify-between'>
                        {/* this is tab section  */}
                        <div className='space-x-4'>
                            <button className="text-textDark text-center px-3 py-1 rounded-full bg-white border border-primary">Morning</button>
                            <button className="text-[#4E4E4E] text-center px-3 py-1 rounded-full bg-[#F4F4F4]">Afternoon</button>
                            <button className="text-[#4E4E4E] text-center px-3 py-1 rounded-full bg-[#F4F4F4]">Dining</button>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <FaCirclePlus className="text-primary" />
                            <h3 className="text-lg font-semibold text-primary border-b border-b-primary">Add activity</h3>
                        </div>
                    </div>
                    <div className='py-4'>
                        <EventCard />
                    </div>
                </div>
            }
        </div>
    );
};
