import React from "react";

export default function CvButton({ id }) {
    return (<>
        <a id={id} href="https://drive.google.com/file/d/1XRmNDDsqSdaL41mM5mFAdJhMOnV7dBLT/view?usp=drive_link" target="_blank" download="public/IdoAzulay_CV.pdf">
            <button className="btn btn-primary">Download CV</button>
        </a>
    </>

    );
}