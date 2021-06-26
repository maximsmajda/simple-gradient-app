import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Window from "./Window";
import { RgbaColorPicker } from "react-colorful";

export const ColorPicker = ({ id }) => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color[id]);

  return (
    <div className="color-picker">
      <Window size="small">
        <RgbaColorPicker
          color={color}
          onChange={(color) => {
            dispatch({ type: "COLOR_CHANGE", payload: { id, color } });
          }}
        />
      </Window>
    </div>
  );
};

export default ColorPicker;
