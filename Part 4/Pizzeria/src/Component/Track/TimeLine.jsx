import React from "react";
import { Box, ChefHat, PackageCheck, SearchCheck, Van } from "lucide-react";

export default function TimeLine() {
  return (
    <>
      <div className="border-b border-textSecClr dark:border-textSecClrDark ">
        <ul className="timeline timeline-vertical w-1/12 ">
          <li className="h-20">
            <div className="timeline-end whitespace-nowrap text-center ms-4 ">
              <p> Order Placed</p>
              <p className="text-orange-700 text-sm animate-pulse text-start">
                in progress
              </p>
            </div>
            <div className="timeline-middle rounded-full p-2 text-textClr dark:text-textClrDark border border-3 border-orange-700/70 bg-orange-700">
              <Box size={30} />
            </div>
            <hr className="bg-orange-700 bg-orange-700/70 animate-pulse" />
          </li>

          <li className="h-20">
            <hr className="bg-orange-700 bg-orange-700/70 animate-pulse" />
            <div className="timeline-middle rounded-full p-2 text-textClr dark:text-textClr border border-3 border-orange-700/70 animate-pulse">
              <PackageCheck size={30} />
            </div>
            <div className="timeline-end  whitespace-nowrap text-center ms-4">
              <p>Confirmed</p>
              <p className="text-orange-700 text-sm animate-pulse text-start">
                in progress
              </p>
            </div>
            <hr className="bg-orange-700 bg-orange-700/70 animate-pulse" />
          </li>

          <li className="h-20">
            <hr className="bg-orange-700 bg-orange-700/70 animate-pulse" />
            <div className="timeline-end  whitespace-nowrap text-center ms-4">
              <p>Preparing</p>
              <p className="text-orange-700 text-sm animate-pulse text-start">
                in progress
              </p>
            </div>
            <div className="timeline-middle rounded-full p-2 text-textClr dark:text-textClr border border-3 border-orange-700/70 animate-pulse">
              <ChefHat size={30} />
            </div>
            <hr className="bg-orange-700 bg-orange-700/70 animate-pulse" />
          </li>

          <li className="h-20">
            <hr className="bg-orange-700 bg-orange-700/70 animate-pulse" />
            <div className="timeline-middle rounded-full p-2 text-textClr dark:text-textClr border border-3 border-orange-700/70 animate-pulse">
              <Van size={30} />
            </div>
            <div className="timeline-end  whitespace-nowrap text-center ms-4">
              <p> Out for Delivery</p>
              <p className="text-orange-700 text-sm animate-pulse text-start">
                in progress
              </p>
            </div>
            <hr className="bg-orange-700 bg-orange-700/70 animate-pulse" />
          </li>

          <li className="h-20">
            <hr className="bg-orange-700 bg-orange-700/70 animate-pulse" />
            <div className="timeline-end  whitespace-nowrap text-center ms-4">
              <p>Delivered</p>
              <p className="text-orange-700 text-sm animate-pulse text-start">
                in progress
              </p>
            </div>
            <div className="timeline-middle rounded-full p-2 text-textClr dark:text-textClr border border-3 border-orange-700/70 animate-pulse">
              <SearchCheck size={30} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
