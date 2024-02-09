"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";


function sumArray(array:number[]) {
    if (!Array.isArray(array)) {
      throw new Error('Input is not an array');
    }
  
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    return sum;
  }

function Calculator() {
  const [selectedTime, setSelectedTime] = useState("15");
  const [person, setPerson] = useState("1");
  const [selectedGrades, setSelectedGrades] =  useState<number[]>([]);

  const grades = [
    { value: 50, label: "Grade 4" },
    { value: 100, label: "Grade 5" },
    { value: 150, label: "Grade 6" },
    { value: 200, label: "Grade 7" },
    { value: 250, label: "Grade 8" },
    { value: 300, label: "Grade 9" },
    { value: 350, label: "Grade 10" },
    { value: 400, label: "Grade 11" },
    { value: 450, label: "Grade 12" },
    { value: 500, label: "Grade 13" },
  ];
  const handleGradeButtonClick = (value: number) => {
    if (selectedGrades.length < JSON.parse(person)) {
      setSelectedGrades([...selectedGrades, value]);
    }
  };

const cost  = (JSON.parse(selectedTime)/60)*(sumArray(selectedGrades))

  //   return (
  //   let cost =

    useEffect(() => {
        cost
    }, [selectedGrades.length==JSON.parse(person)]);

  return (
    <div className="w-[500px]  mx-auto h-[100vh] flex flex-col gap-5 px-3">
      <div className="flex justify-between items-center h-[10vh]">
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
        <h1 className="text-lg font-semibold">Metting Cost Calculator</h1>
      </div>
      <div className="bg-orange-600 h-[30vh] relative">
        <h1 className=" absolute bottom-3 right-5 flex justify-end flex-col">
          <p className="text-4xl font-semibold text-white">₹ {cost}</p>
        </h1>
      </div>
      <div className="flex justify-between items-center h-[10vh]">
        <select
          className="px-8 py-3 border cursor-pointer"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value={15}>15 min</option>
          <option value={30}>30 min</option>
          <option value={60}>1 hr</option>
          <option value={90}>1 hr 30 min</option>
          <option value={120}>2 hr</option>
          <option value={150}>2 hr 30 min</option>
          <option value={180}>3 hr</option>
          <option value={210}>3 hr 30 min</option>
          <option value={240}>4 hr</option>
        </select>
        <select
          className="px-8 py-3 border cursor-pointer"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
        </select>
      </div>
      <div className={` ${selectedGrades.length<JSON.parse(person)? "":"hidden"} grid grid-cols-4 justify-start items-center gap-2`}>
        {grades.map((grade, index) => (
          <button
            key={index}
            type="button"
            className="border p-3 bg-gray-300 hover:bg-gray-100"
            onClick={() => handleGradeButtonClick(grade.value)}
          >
            {grade.label}
          </button>
        ))}
      </div>
      <div className={` ${selectedGrades.length<JSON.parse(person)? "hidden":" flex"} justify-center items-center gap-2`}>
            <p className="text-2xl font-semibold"> Your Metting cost is ₹ {cost}</p>
            
      </div>
    </div>
  );
}

export default Calculator;
