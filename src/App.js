import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "", city: "", state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotifications: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of form data.");
    console.log(formData);
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <form onSubmit={submitHandler} className="space-y-2">
        <label htmlFor="firstName" className="text-sm font-medium leading-6 text-gray-900">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Dev"
          value={formData.firstName}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="lastName" className="text-sm font-medium leading-6 text-gray-900">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Mistry"
          value={formData.lastName}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="email" className="text-sm font-medium leading-6 text-gray-900">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc.123@xyz.com"
          value={formData.email}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="country" className="text-sm font-medium leading-6 text-gray-900">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br />
        <label htmlFor="streetAddress" className="text-sm font-medium leading-6 text-gray-900">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-24C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="city" className="text-sm font-medium leading-6 text-gray-900">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Bilimora"
          value={formData.city}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="state" className="text-sm font-medium leading-6 text-gray-900">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Gujarat"
          value={formData.state}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="postalCode" className="text-sm font-medium leading-6 text-gray-900">ZIP / Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="396321"
          value={formData.postalCode}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                value={formData.comments}
                onChange={changeHandler}
                className="flex h-6 items-center w-4 rounded"
              />

              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">Comments</label>
                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>

            <div className="flex">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                value={formData.candidates}
                onChange={changeHandler}
                className="flex h-6 items-center w-4 rounded"
              />

              <div className="ml-3 text-sm leading-6">
                <label htmlFor="candidates" className="font-medium text-gray-900">Candidates</label>
                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="flex">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                value={formData.offers}
                onChange={changeHandler}
                className="flex h-6 items-center w-4 rounded"
              />

              <div className="ml-3 text-sm leading-6">
                <label htmlFor="offers" className="font-medium text-gray-900">Offers</label>
                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend className="contents text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
                className="h-4 w-4"
              />
              <label htmlFor="pushEverything" className="ml-3 text-sm font-medium leading-6 text-gray-900">Everything</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="pushEmail"
                name="pushNotifications"
                value="Same as Email"
                onChange={changeHandler}
                className="h-4 w-4"
              />
              <label htmlFor="pushEmail" className="ml-3 text-sm font-medium leading-6 text-gray-900">Same as Email</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="pushNothing"
                name="pushNotifications"
                value="No Push Notifications"
                onChange={changeHandler}
                className="h-4 w-4"
              />
              <label htmlFor="pushNothing" className="ml-3 text-sm font-medium leading-6 text-gray-900">No Push Notifications</label>
            </div>
          </div>
        </fieldset>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </form>
    </div>
  );
}

export default App;