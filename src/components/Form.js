//import React from 'react'
import React, { useState } from "react";
import "../App.css";
import SignUpInfo from "./SignUpInfo";
import PokemonSelection from "./PokemonSelection";
import Review from "./Review";
import { userSchema } from "../Validation/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

//Main function
function Form() {
  const [page, setPage] = useState(0);
  const [pokemonName, setPokemonName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      pockemonName: "",
    },
  });
  const isNoErrors = !Object.keys(errors).length;

  const FormTitles = ["Pokemon Form", "Pokemon Selection", "Review"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo register={register} errors={errors} />;
    } else if (page === 1) {
      return (
        <PokemonSelection
          pokemonName={pokemonName}
          setPokemonName={setPokemonName}
        />
      );
    } else {
      return <Review pokemonName={pokemonName} getValues={getValues} />;
    }
  };

  const onNext = () => {
    console.log(errors);
    if (isNoErrors) {
      setPage((currPage) => currPage + 1);
    }
  };
  const onSubmit = () => {
    if (page === 2) {
      alert("FORM SUBMITTED");
    } else {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>

      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        {PageDisplay()}
        <div className="footer">
          <button
            type="button"
            disabled={page === 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Prev
          </button>
          <button type="submit">
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
