
import React from "react";

export default function CvButton({ id }) {
    return (
        <a
            id={id}
            href="/IdoAzulay_CV.pdf"
            download="IdoAzulay_CV.pdf"
            className="cv--download--button"
        >
            Download CV
            <span aria-hidden="true">↓</span>
        </a>
    );
}
