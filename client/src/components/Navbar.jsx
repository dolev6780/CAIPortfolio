import React from "react";

export default function Navbar() {

  return (
    <div className="flex justify-between items-center p-4">
        <div className="ml-4">
        <h1>cai</h1>
        </div>
        <ul className="flex">
          <li className="mr-4 cursor-pointer">צור קשר</li>
          <li className="mr-4 cursor-pointer">אודות</li>
          <li className="mr-4 cursor-pointer">עמוד הבית</li>
        </ul>
    </div>
  );
}
