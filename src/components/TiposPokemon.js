import React from "react";

export const TiposPokemon = ({ typesFrequency, setSelectedType }) => {
  const typeRadioButtons = [
    <div key="all" className="flex items-center m-5">
      <input
        type="radio"
        name="typeRadio"
        value=""
        id="typeRadio_all"
        onChange={() => setSelectedType("")}
        className="mr-2 text-blue-600 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      />
      <label htmlFor="typeRadio_all" className="text-white cursor-pointer">
        Todos
      </label>
    </div>,
    (typesFrequency).map((typeName, index) => (
      <div key={index} className="flex items-center m-5">
        <input
          type="radio"
          name="typeRadio"
          value={typeName}
          id={`typeRadio_${index}`}
          onChange={() => setSelectedType(typeName)}
          className="mr-2 text-blue-600 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
        <label htmlFor={`typeRadio_${index}`} className="text-white cursor-pointer">
          {typeName}
        </label>
      </div>
    ))
  ];

  return (
    <div className=" text-white mx-8 border-2 border rounded-lg bg-black bg-opacity-50 text-white ">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10  gap-4 mt-4 ">
        {typeRadioButtons}
      </div>
    </div>
  );
};

export default TiposPokemon;
