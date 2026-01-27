import React from "react";

export default function GuestTableHead() {
  const THead = [
    {
      id: 1,
      title: "User ID",
    },
    {
      id: 2,
      title: "Full Name & Email",
    },
    {
      id: 3,
      title: "Company",
    },
    {
      id: 4,
      title: "Phone",
    },
    {
      id: 5,
      title: "Country",
    },
    {
      id: 6,
      title: "Stay Duration",
    },
    {
      id: 7,
      title: "Join Date",
    },
    {
      id: 8,
      title: "spent",
    },
    {
      id: 10,
      title: "level",
    },
    {
      id: 9,
      title: "Action",
    },
  ];
  return (
    <thead className="">
      <tr className="bg-secBgc">
        {THead.map((head) => (
          <th
            key={head.id}
            scope="col"
            className="p-5 whitespace-nowrap text-sm leading-6 font-semibold  capitalize text-center "
          >
            {head.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}
