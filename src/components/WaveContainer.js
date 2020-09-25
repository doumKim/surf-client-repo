import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import WaveGroup from "./WaveGroup";

const Canvas = styled.canvas`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default ({ width, height }) => {
  const [state, setState] = useState({
    canvas: null,
    ctx: null,
    waveGroup: null,
  });

  const canvas = useRef(null);

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");
      const waveGroup = new WaveGroup();
      window.addEventListener("resize", resize, false);

      setState({
        canvas: canvas.current,
        ctx,
        waveGroup,
      });
    }
    return () => {
      window.removeEventListener("resize", resize, false);
    };
  }, [canvas]);

  useEffect(() => {
    let currentAnimation = null;
    if (state.canvas !== null) {
      resize();
      currentAnimation = requestAnimationFrame(animate);
    }
    return () => {
      cancelAnimationFrame(currentAnimation);
    };
  }, [state]);

  const resize = () => {
    console.log(state.waveGroup);
    const stageWidth = width;
    const stageHeight = height;

    // state.canvas.width = stageWidth * 2;
    // state.canvas.height = stageHeight * 2;
    // state.ctx.scale(2, 2);

    state.waveGroup.resize(stageWidth, stageHeight);
  };

  const animate = t => {
    const stageWidth = width;
    const stageHeight = height;

    state.ctx.clearRect(0, 0, stageWidth, stageHeight);

    state.waveGroup.draw(state.ctx);
    requestAnimationFrame(animate);
  };

  return <Canvas ref={canvas}></Canvas>;
};
