import React from "react";

import { SpinnerImage, SpinnerOverlay } from "./styled.style";
import loadingImage from "../assets/loadingImage.gif";

const Spinner = () => (
    <SpinnerOverlay><SpinnerImage src={loadingImage} /></SpinnerOverlay>
)

export default Spinner;