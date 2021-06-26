import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Window from "./Window";

export default function Settings() {
    const color1 = useSelector((state) => state.color[0]);
    const color2 = useSelector((state) => state.color[1]);
    const gradientType = useSelector((state) => state.gradientType);
    const angle = useSelector((state) => state.angle);
    const startingPoint = useSelector((state) => state.startingPoint);
    const endingPoint = useSelector((state) => state.endingPoint);

    const dispatch = useDispatch();

    const makeRgbaString = (color) => {
        return (
            "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + color.a + ")"
        );
    };

    const gradientString = (gradientType) => {
        return gradientType === "linear"
            ? gradientType +
            "-gradient(" +
            angle +
            "deg, " +
            makeRgbaString(color1) +
            " " +
            startingPoint +
            "%, " +
            makeRgbaString(color2) +
            " " +
            endingPoint +
            "%)"
            : gradientType +
            "-gradient(" +
            makeRgbaString(color1) +
            startingPoint +
            "%, " +
            makeRgbaString(color2) +
            " " +
            endingPoint +
            "%)";
    };

    const copyToClipboard = () => {
        const el = document.getElementById("textarea");
        el.select();
        document.execCommand("copy");
    };

    return (
        <div className="settings">
            <Window size="small">
                <div className="settings-inputs">
                    <div className="settings-inputs-wrapper">
                        <p>gradient type</p>
                        <div className="radio-buttons">
                            <input
                                type="radio"
                                id="linear"
                                name="gradientType"
                                value="linear"
                                onChange={(e) => {
                                    dispatch({ type: "GRADIENT_TYPE", payload: e.target.value });
                                }}
                                checked={gradientType === "linear" && "checked"}
                            />
                            <label htmlFor="linear">linear</label>

                            <input
                                type="radio"
                                id="radial"
                                name="gradientType"
                                value="radial"
                                onChange={(e) => {
                                    dispatch({ type: "GRADIENT_TYPE", payload: e.target.value });
                                }}
                                checked={gradientType === "radial" && "checked"}
                            />
                            <label htmlFor="radial">radial</label>
                        </div>
                        <div className="angle-slider">
                            <p>angle</p>
                            <input
                                type="range"
                                id="angle"
                                className="slider"
                                name="angle"
                                min="0"
                                max="360"
                                value={angle}
                                step="1"
                                onChange={(e) =>
                                    dispatch({ type: "SET_ANGLE", payload: e.target.value })
                                }
                            />
                            <label htmlFor="angle">{angle}</label>
                        </div>

                        <div className="shift-sliders">
                            <p>shift</p>
                            <input
                                type="range"
                                id="startingPoint"
                                className="slider"
                                name="startingPoint"
                                min="0"
                                max="100"
                                value={startingPoint}
                                step="1"
                                onChange={(e) =>
                                    dispatch({
                                        type: "SET_STARTING_POINT",
                                        payload: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="starting-point">{startingPoint}</label>

                            <input
                                type="range"
                                id="endingPoint"
                                className="slider"
                                name="endingPoint"
                                min="0"
                                max="100"
                                value={endingPoint}
                                step="1"
                                onChange={(e) =>
                                    dispatch({
                                        type: "SET_ENDING_POINT",
                                        payload: e.target.value,
                                    })
                                }
                            />
                            <label htmlFor="endingPoint">{endingPoint}</label>
                        </div>
                    </div>
                </div>

                <div className="gradient-result">
                    <textarea
                        value={gradientString(gradientType) + ";"}
                        readOnly
                        name="textarea"
                        id="textarea"
                        cols="10"
                        rows="3"
                        autoCorrect="off"
                        spellCheck="false"
                        wrap="soft"
                    ></textarea>
                    <button
                        className="copy-button"
                        onClick={() => {
                            copyToClipboard();
                        }}
                    >
                        Copy to clipboard
                    </button>
                </div>
            </Window>
        </div>
    );
}
