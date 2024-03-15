"use client";
import React, { useEffect, useState } from "react";
import { NextResponse } from "next/server";

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleAPICall = async () => {
    try {
      const passcode = "ehen2rfow";
      const response = await fetch(`https://webdev2-class-demo.vercel.app/api/sampleReqs/?passCode=${passcode}`);
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500" onClick={handleAPICall}>
          Submit
        </button>
        {secretCode && (
          <div className="mt-4 bg-blue-200 p-2 rounded-md border border-blue-600">
            Secret Code: {secretCode}
          </div>
        )}
      </div>
    </div>
  );
};

export default APICallExam;
