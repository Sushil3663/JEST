import React from "react";
import "./style.css";
const Application = () => {
  return (
    <div className="form">
      <h1>Job Application Form</h1>
      <h1>Section 1</h1>
      <span title="close">X</span>
      <div data-testid="custom-element">HTML custom element</div>

      <form>
        <div>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            defaultValue={"Sushil"}
            placeholder="Enter Name"
          />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value={""}>Select a country</option>
            <option value={"KTM"}>Kathmandu</option>
            <option value={"LAL"}>Lalitpur</option>
            <option value={"DHR"}>Dharan</option>
            <option value={"TMT"}>Tumlingtar</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkbox">I agree to term and condition </label>
          <input type="checkbox" id="checkbox" defaultChecked={true} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Application;
