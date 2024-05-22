import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
// import noImage from "../../img/big-placeholder.jpg";
// import "../../styles/details.css";
import { Context } from "../store/appContext";
import { object } from "prop-types";

export const Details = () => {
    let state = useContext(Context);

    //useEffect(() => {
        let details = {...state.actions.set_getDetails()};
        console.log(`details: using state.store.details, this in it now: `);
        console.log(state.store.details);
        console.log(`${type}/${uid}`);

        let updatedDetails = {...state.actions.set_getDetails()};
        const type = updatedDetails.type;
        const uid = updatedDetails.uid;
        delete updatedDetails.uid;
        delete updatedDetails.type;
        delete updatedDetails.url;
        delete updatedDetails.edited;
        delete updatedDetails.created;

        Object.entries(updatedDetails).forEach(([key, value]) => {
            if (typeof value === "string" && value.slice(0, 8) === "https://") {
                delete updatedDetails[key];
            }
        });

        console.log(`details: theese are the details after treatment: `);
        console.log(updatedDetails);
        console.log(`${type}/${uid}`);
   // }, []);

    return (
        <div className="container border border-info border-opacity-25 rounded-4 py-2 px-2" style={{ width: "90vw" }}>
            <div className="row">
                <div className="col-6">
                     <img src={`https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${uid}.jpg`}
						onError={(e) => { e.target.onerror = null; e.target.src = noImage; }}
						alt = {`an image of${state.store.details?.description}`}
						className="img-fluid rounded-start"
						style={{Width: "50%"}}
					 /> 
                </div>
                <div className="col-6">
                    <div className="card-body text-wrap">
                        <h5 className="card-title my-3">{state.store.details?.name || "nothing selected"}</h5>
                        {Object.entries(state.store.details || {}).map(([key, value], index) => (
                            <p className="card-text" key={index}>
                                {state.actions.prepareKey([key, value])}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <Link to="/" className="btn btn-outline-primary m-4">
                Go home
            </Link>
        </div>
    );
};
