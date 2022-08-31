import React, { useState } from "react";
import "../App.css";

function SignUpInfo({ register, errors }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        {...register("firstName")}
      />
      {errors.firstName && (
        <div>
          <span>{errors.firstName.message}</span>
        </div>
      )}
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        {...register("lastName")}
      />
      {errors.lastName && (
        <div>
          <span>{errors.lastName.message}</span>
        </div>
      )}
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        {...register("phoneNumber")}
      />
      {errors.phoneNumber && (
        <div>
          <span>{errors.phoneNumber.message}</span>
        </div>
      )}
      <input
        type="text"
        name="address"
        placeholder="Address"
        {...register("address")}
      />
      {errors.address && (
        <div>
          <span>{errors.address.message}</span>
        </div>
      )}
    </div>
  );
}

export default SignUpInfo;
