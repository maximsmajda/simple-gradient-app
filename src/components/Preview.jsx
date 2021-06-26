import React from "react";
import { useSelector } from "react-redux";
import Window from "./Window";

export default function Preview() {
  const angle = useSelector((state) => state.angle);
  const gradientType = useSelector((state) => state.gradientType);
  const color1 = useSelector((state) => state.color[0]);
  const color2 = useSelector((state) => state.color[1]);
  const startingPoint = useSelector((state) => state.startingPoint);
  const endingPoint = useSelector((state) => state.endingPoint);

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

  return (
    <div className="preview">
      <Window size="big">
        <div
          className="preview-gradient"
          style={{ background: gradientString(gradientType) }}
        ></div>
      </Window>
    </div>
  );
}
