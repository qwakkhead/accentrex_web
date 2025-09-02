import { useState } from "react";
import { Link } from "react-router-dom"; // Add this import

// Reusable Radio Group Component
const RadioGroup = ({ name, title, options, onChange }) => (
  <div className="mb-6">
    <h4 className="font-bold mb-2">{title}</h4>
    {options.map((opt, i) => (
      <label key={i} className="block cursor-pointer">
        <input
          type="radio"
          name={name}
          className="mr-2 accent-[#611221]"
          onChange={() => onChange(opt.val)}
        />
        {opt.label} ({opt.val} pts)
      </label>
    ))}
  </div>
);

const PointSystem = () => {
  const [name, setName] = useState("");
  const [points, setPoints] = useState({
    age: 0,
    english: 0,
    expOverseas: 0,
    expAus: 0,
    education: 0,
  });

  // Calculate total points (work exp capped at 20)
  const totalPoints =
    points.age +
    points.english +
    Math.min(points.expOverseas + points.expAus, 20) +
    points.education;

  return (
    <div className="bg-[#fff2f2] text-[#611221] min-h-screen py-10 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">POINT SYSTEM</h2>
        <h3 className="text-xl font-semibold text-center text-[#611221] mb-6">
          Australia’s General Skilled Migration
        </h3>

        <p className="text-sm mb-4 text-justify">
          In Australia’s General Skilled Migration (GSM) program, the points
          test is a scoring system used to decide whether you’re eligible for
          certain skilled visas — like the Subclass 189 (Skilled Independent),
          Subclass 190 (Skilled Nominated), and Subclass 491 (Skilled Work
          Regional).
        </p>
        <p className="text-sm mb-4 text-justify">
          You must score <span className="font-semibold">at least 65 points </span> 
          to be eligible, but in practice, the competitive “cut-off” can be much
          higher depending on the occupation and demand.
        </p>
        <p className="text-sm mb-6 text-justify">
          Here’s the actual current points test categories and how they’re
          scored (as per the Department of Home Affairs rules):
        </p>

        {/* Key Things to Note */}
        <div className="bg-[#fff2f2] p-4 rounded-lg shadow-md mb-8">
          <h4 className="text-lg font-semibold text-[#611221] mb-3">
            Key things to note:
          </h4>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              <span className="font-semibold">65 points</span> is the legal
              minimum, but many popular occupations require higher to get an
              invitation.
            </li>
            <li>
              Points are calculated at the time of invitation (not just when you
              lodge an Expression of Interest).
            </li>
            <li>
              The Department of Home Affairs updates invitation round results
              regularly so you can see real competitive scores.
            </li>
          </ul>
        </div>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-[#611221] rounded-full px-4 py-2 mb-8 focus:outline-none focus:ring-2 focus:ring-[#611221]"
        />

        {/* Sections */}
        <RadioGroup
          name="age"
          title="1. Age (at the time of invitation)"
          options={[
            { label: "18 - 24", val: 25 },
            { label: "25 - 32", val: 30 },
            { label: "33 - 39", val: 25 },
            { label: "40 - 44", val: 15 },
            { label: "45 - 49", val: 0 },
          ]}
          onChange={(val) => setPoints((prev) => ({ ...prev, age: val }))}
        />

        <hr className="my-6 border-[#611221]/30" />

        <RadioGroup
          name="english"
          title="2. English Language Ability"
          options={[
            { label: "Competent", val: 0 },
            { label: "Proficient", val: 10 },
            { label: "Superior", val: 20 },
          ]}
          onChange={(val) => setPoints((prev) => ({ ...prev, english: val }))}
        />

        <hr className="my-6 border-[#611221]/30" />

        {/* Skilled Employment */}
        <div className="mb-6">
          <h4 className="font-bold mb-2">3. Skilled Employment Experience</h4>
          <p className="italic mb-4">
            You can combine overseas and Australian work experience, but the
            maximum is 20 points total.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <RadioGroup
              name="expOverseas"
              title="Outside Australia (last 10 yrs)"
              options={[
                { label: "3 – 4 years", val: 5 },
                { label: "5 – 7 years", val: 10 },
                { label: "8 – 10 years", val: 15 },
              ]}
              onChange={(val) =>
                setPoints((prev) => ({ ...prev, expOverseas: val }))
              }
            />
            <RadioGroup
              name="expAus"
              title="In Australia (last 10 yrs)"
              options={[
                { label: "1 – 2 years", val: 5 },
                { label: "3 – 4 years", val: 10 },
                { label: "5 – 7 years", val: 15 },
                { label: "8 – 10 years", val: 20 },
              ]}
              onChange={(val) =>
                setPoints((prev) => ({ ...prev, expAus: val }))
              }
            />
          </div>
        </div>

        <hr className="my-6 border-[#611221]/30" />

        <RadioGroup
          name="education"
          title="4. Educational Qualifications"
          options={[
            { label: "Doctorate (PhD)", val: 20 },
            { label: "Bachelor / Master’s", val: 15 },
            { label: "Diploma / Trade Qualification", val: 10 },
            { label: "Award / Qualification recognized", val: 10 },
          ]}
          onChange={(val) => setPoints((prev) => ({ ...prev, education: val }))}
        />

        {/* Total Points */}
        <div className="mt-6 text-center">
          <p className="text-lg font-bold">
            Total Points:{" "}
            <span className="text-[#611221]">{totalPoints}</span>
          </p>
        </div>

         {/* Next button */}
        <div className="mt-6 text-right">
          <Link to="part2">
            <button className="bg-[#611221] text-white px-6 py-2 rounded-lg hover:bg-[#831515] transition">
              Next &gt;&gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PointSystem;
