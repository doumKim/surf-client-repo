import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import Wave from "./WaveComponents";

const Canvas = styled.canvas`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  pointer-events: none;
  z-index: 3;
`;

export default ({ width, height }) => {
  const [state, setState] = useState({
    canvas: null,
    ctx: null,
    wave: null,
  });

  const canvas = useRef(null);

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");
      const wave = new Wave(width, height / 2);

      setState({
        canvas: canvas.current,
        ctx,
        wave,
      });
    }
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

  useEffect(() => {
    resize();
  }, [width, height]);

  const resize = () => {
    const stageWidth = width;
    const stageHeight = height / 2;
    if (state.wave !== null) {
      state.wave.resize(stageWidth, stageHeight);
    }
  };

  const animate = t => {
    const stageWidth = width;
    const stageHeight = height / 2;

    state.ctx.clearRect(0, 0, stageWidth, stageHeight);

    state.wave.draw(state.ctx);
    requestAnimationFrame(animate);
  };

  return <Canvas ref={canvas}></Canvas>;
};
