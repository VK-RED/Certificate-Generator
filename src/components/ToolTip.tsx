"use client";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
        id : 1,
        name: "Vishnu",
        designation: "Software Engineer",
        image:"https://avatars.githubusercontent.com/u/130341088?v=4"
    }
]

export const ToolTip = () => {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full z-10">
          <AnimatedTooltip items={people} />
        </div>
    );
}