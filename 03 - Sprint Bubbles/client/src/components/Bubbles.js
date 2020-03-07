import React, { useState, useEffect } from "react";
import { Pack } from "@potion/layout";
import { Svg, Circle } from "@potion/element";

const Bubbles = ({ colors }) => {
  const [bubbleData, setBubbleData] = useState([]);
  const [prevColor , setPrevColor] = useState(null)
  const [prevR , setPrevR] = useState(null)
  useEffect(() => {
    const generateBubbleData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setBubbleData(generateBubbleData);
  }, [colors]);

  const onMouseEnterHandler = (e) => {
    setPrevColor(e.target.style.fill)
    setPrevR(e.target.style.r)
    e.target.style.r = "100"
    e.target.style.fill = "black"
    console.log(e.target)
  }
  const onMouseLeaveHandler = (e) => {
    e.target.style.fill = prevColor
    e.target.style.r = prevR
  }
  return (
    <div className="bubble-wrap">
      <p>bubbles</p>
      <Svg width={800} height={800}>
        <Pack
          data={{
            children: bubbleData
          }}
          sum={datum => datum.value - 1}
          size={[800, 800]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 700 })}
          animate
        >
          {nodes =>
            nodes
              .map(({ x, y, r, key }, i) => {
                if (i < colors.length) {
                  return (
                    <Circle
                      onMouseEnter={onMouseEnterHandler}
                      onMouseLeave={onMouseLeaveHandler}
                      key={key}
                      cx={x}
                      cy={y}
                      r={r}
                      fill={colors[i].code.hex}
                    />
                  );
                }
                return null;
              })
              .filter(v => v)
          }
        </Pack>
      </Svg>
    </div>
  );
};

export default Bubbles;
