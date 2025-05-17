import React from "react";

interface BoxProp {
  heading: string;
  icon: React.ReactNode;
  description: string;
}

export default function BoxSection(prop: BoxProp) {
  return (
    <div className="text-center py-10 px-4 space-y-4 bg-white shadow-2xl rounded-3xl">
      <div>{prop.icon}</div>
      <h3 className="text-2xl underline underline-offset-4">{prop.heading}</h3>
      <p className="text-sm text-pretty">{prop.description}</p>
    </div>
  );
}
