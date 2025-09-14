import { useState } from "react";

function FindJob() {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({
    fullName: { firstName: "", lastName: "" },
    address: { country: "", district: "", upozilla: "" },
    profilePicture: null,
    description: "",
    profession: { position: "", fromYear: "", toMonth: "" },
    skills: [],
    education: "",
    email: "",
    phone: "",
    nidFront: null,
    nidBack: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setCurrentSection((prev) => prev + 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      ...field,
    }));
  };

  const countries = ["Bangladesh", "India", "USA"];
  const districts = { Bangladesh: ["Dhaka", "Chittagong"], India: ["Delhi", "Mumbai"], USA: ["New York", "California"] };
  const upozillas = { Dhaka: ["Uttara", "Dhanmondi"], Chittagong: ["Pahartali", "Kotwali"], Delhi: ["South", "North"] };

  const professions = ["Engineer", "Doctor", "Teacher"];
  const skills = ["JavaScript", "Python", "Java"];
  const experienceLevels = ["Beginner", "Intermediate", "Expert"];

  if (submitted) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">Submitted Information</h1>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Personal Info</h2>
          <p>Full Name: {formData.fullName.firstName} {formData.fullName.lastName}</p>
          <p>Address: {formData.address.country}, {formData.address.district}, {formData.address.upozilla}</p>
          <p>Profile Picture: {formData.profilePicture?.name || "Not uploaded"}</p>

          <h2 className="text-lg font-semibold mt-4 mb-4">Professional Info</h2>
          <p>Description: {formData.description}</p>
          <p>Profession: {formData.profession.position}</p>
          <p>From: {formData.profession.fromYear}</p>
          <p>To: {formData.profession.toMonth}</p>
          <p>Skills: {formData.skills.join(", ")}</p>
          <p>Education: {formData.education}</p>

          <h2 className="text-lg font-semibold mt-4 mb-4">Account Security</h2>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>NID Front: {formData.nidFront?.name || "Not uploaded"}</p>
          <p>NID Back: {formData.nidBack?.name || "Not uploaded"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">Find Your Job</h1>

      {/* Section 1 */}
      {currentSection === 1 && (
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Personal Info</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={formData.fullName.firstName}
              onChange={(e) => handleChange({ fullName: { ...formData.fullName, firstName: e.target.value } })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.fullName.lastName}
              onChange={(e) => handleChange({ fullName: { ...formData.fullName, lastName: e.target.value } })}
              className="border p-2 rounded"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <select
              value={formData.address.country}
              onChange={(e) => handleChange({ address: { ...formData.address, country: e.target.value } })}
              className="border p-2 rounded"
            >
              <option value="">Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <select
              value={formData.address.district}
              onChange={(e) => handleChange({ address: { ...formData.address, district: e.target.value } })}
              className="border p-2 rounded"
              disabled={!formData.address.country}
            >
              <option value="">District</option>
              {(districts[formData.address.country] || []).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <select
              value={formData.address.upozilla}
              onChange={(e) => handleChange({ address: { ...formData.address, upozilla: e.target.value } })}
              className="border p-2 rounded"
              disabled={!formData.address.district}
            >
              <option value="">Upozilla</option>
              {(upozillas[formData.address.district] || []).map((upozilla) => (
                <option key={upozilla} value={upozilla}>
                  {upozilla}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-2">Profile Picture</label>
            <input
              type="file"
              onChange={(e) => handleChange({ profilePicture: e.target.files[0] })}
              className="border p-2 rounded"
            />
          </div>
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded -mt-10 float-right">
            Next
          </button>
        </div>
      )}

      {/* Section 2 */}
      {currentSection === 2 && (
        <div className="bg-gray-100 h-[550px] p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Professional Info</h2>
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => handleChange({ description: e.target.value })}
            className="border p-2 rounded w-full mb-4"
          ></textarea>
          <div className="grid grid-cols-3 gap-4">
            <select
              value={formData.profession.position}
              onChange={(e) => handleChange({ profession: { ...formData.profession, position: e.target.value } })}
              className="border p-2 rounded"
            >
              <option value="">Select Position</option>
              {professions.map((profession) => (
                <option key={profession} value={profession}>
                  {profession}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="From Year"
              value={formData.profession.fromYear}
              onChange={(e) => handleChange({ profession: { ...formData.profession, fromYear: e.target.value } })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="To Month"
              value={formData.profession.toMonth}
              onChange={(e) => handleChange({ profession: { ...formData.profession, toMonth: e.target.value } })}
              className="border p-2 rounded"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Skills</label>
            <select
              multiple
              value={formData.skills}
              onChange={(e) =>
                handleChange({ skills: [...e.target.selectedOptions].map((option) => option.value) })
              }
              className="border p-2 rounded w-full"
            >
              {skills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="Education"
            value={formData.education}
            onChange={(e) => handleChange({ education: e.target.value })}
            className="border p-2 rounded mt-4 w-full"
          />
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded mt-10 float-right">
            Next
          </button>
        </div>
      )}

      {/* Section 3 */}
      {currentSection === 3 && (
        <div className="bg-gray-100 h-[400px] p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold text-red-500 mb-4">Account Security</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email Verify"
              value={formData.email}
              onChange={(e) => handleChange({ email: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number Verify"
              value={formData.phone}
              onChange={(e) => handleChange({ phone: e.target.value })}
              className="border p-2 rounded"
            />
          </div>
          <div className="text-center mt-5 font-bold text-blue-500">Upload your NID</div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="border-dashed border-2 border-blue-500 p-4 rounded text-center">
              <input
                type="file"
                onChange={(e) => handleChange({ nidFront: e.target.files[0] })}
                className="hidden"
                id="nid-front"
              />
              <label htmlFor="nid-front" className="cursor-pointer text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Browse File
              </label>
              <p className="text-sm text-gray-500">Upload Front Side</p>
            </div>
            <div className="border-dashed border-2 border-blue-500 p-4 rounded text-center">
              <input
                type="file"
                onChange={(e) => handleChange({ nidBack: e.target.files[0] })}
                className="hidden"
                id="nid-back"
              />
              <label htmlFor="nid-back" className="cursor-pointer text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Browse File
              </label>
              <p className="text-sm text-gray-500">Upload Back Side</p>
            </div>
          </div>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mt-16 float-right">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default FindJob;