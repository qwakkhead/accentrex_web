import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PointSystemPart2 = () => {
  const navigate = useNavigate();
  const [points, setPoints] = useState({
    ausStudy: 0,
    specialistEdu: 0,
    language: 0,
    regionalStudy: 0,
    partner: 0,
    nomination: 0,
  });

  const totalPoints =
    points.ausStudy +
    points.specialistEdu +
    points.language +
    points.regionalStudy +
    points.partner +
    points.nomination;

  const handleChange = (field, value) => {
    setPoints((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#fff2f2] text-[#611221] min-h-screen py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Additional Points Test Factors
        </h2>

        {/* Q5 Australian Study */}
        <div className="mb-6 border-b pb-4">
          <h4 className="font-bold mb-2">
            5. Australian Study Requirement
          </h4>
          <p className="text-sm mb-2">
            At least 2 years of study in Australia
          </p>
          <label className="block">
            <input
              type="radio"
              name="ausStudy"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("ausStudy", 5)}
            />
            Yes (5 pts)
          </label>
          <label className="block">
            <input
              type="radio"
              name="ausStudy"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("ausStudy", 0)}
            />
            No (0 pts)
          </label>
        </div>

        {/* Q6 Specialist Education */}
        <div className="mb-6 border-b pb-4">
          <h4 className="font-bold mb-2">
            6. Specialist Education Qualification
          </h4>
          <p className="text-sm mb-2">
            Masters by research or Doctorate in STEM field from an Australian
            institution (min 2 academic years)
          </p>
          <label className="block">
            <input
              type="radio"
              name="specialistEdu"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("specialistEdu", 10)}
            />
            Yes (10 pts)
          </label>
          <label className="block">
            <input
              type="radio"
              name="specialistEdu"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("specialistEdu", 0)}
            />
            No (0 pts)
          </label>
        </div>

        {/* Q7 Community Language */}
        <div className="mb-6 border-b pb-4">
          <h4 className="font-bold mb-2">
            7. Credentialled Community Language
          </h4>
          <p className="text-sm mb-2">
            NAATI accreditation (e.g., for interpreters/translators)
          </p>
          <label className="block">
            <input
              type="radio"
              name="language"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("language", 5)}
            />
            Yes (5 pts)
          </label>
          <label className="block">
            <input
              type="radio"
              name="language"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("language", 0)}
            />
            No (0 pts)
          </label>
        </div>

        {/* Q8 Regional Study */}
        <div className="mb-6 border-b pb-4">
          <h4 className="font-bold mb-2">8. Study in Regional Australia</h4>
          <p className="text-sm mb-2">
            Lived and studied in designated regional area
          </p>
          <label className="block">
            <input
              type="radio"
              name="regionalStudy"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("regionalStudy", 5)}
            />
            Yes (5 pts)
          </label>
          <label className="block">
            <input
              type="radio"
              name="regionalStudy"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("regionalStudy", 0)}
            />
            No (0 pts)
          </label>
        </div>

        {/* Q9 Partner Skills */}
        <div className="mb-6 border-b pb-4">
          <h4 className="font-bold mb-2">9. Partner Skills</h4>
          <label className="block">
            <input
              type="radio"
              name="partner"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("partner", 10)}
            />
            Partner under 45, with competent English, and skills assessment in
            eligible occupation (10 pts)
          </label>
          <label className="block">
            <input
              type="radio"
              name="partner"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("partner", 5)}
            />
            Partner with competent English only (no skills assessment) (5 pts)
          </label>
          <label className="block">
            <input
              type="radio"
              name="partner"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("partner", 10)}
            />
            Single or partner is Australian citizen/PR (10 pts)
          </label>
        </div>

        {/* Q10 State Nomination */}
        <div className="mb-6">
          <h4 className="font-bold mb-2">
            10. State/Territory Nomination or Regional Sponsorship
          </h4>
          <label className="block">
            <input
              type="radio"
              name="nomination"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("nomination", 5)}
            />
            Subclass 190 nomination (state/territory) (5 pts)
          </label>
          <label className="block">
            <input
              type="radio"
              name="nomination"
              className="mr-2 accent-[#611221]"
              onChange={() => handleChange("nomination", 15)}
            />
            Subclass 491 nomination or sponsorship by eligible family in regional
            area (15 pts)
          </label>
        </div>

        {/* Total Points */}
        <div className="mt-6 text-center">
          <p className="text-lg font-bold">
            Total Points:{" "}
            <span className="text-[#611221]">{totalPoints}</span>
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button className="bg-gray-200 text-[#611221] px-6 py-2 rounded-lg hover:bg-gray-300 transition" onClick={() => navigate("/enroll")}>
            &lt;&lt; Previous
          </button>
          <button className="bg-[#611221] text-white px-6 py-2 rounded-lg hover:bg-[#831515] transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PointSystemPart2;
