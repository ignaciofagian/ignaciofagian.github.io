import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import "./Typing.scss";

export default function Typing({ dataText: texts }: any) {
  const waitStart = 2100;
  const waitEnd = 450;
  const speed = 50;

  const [state, setState] = useState({
    left: "",
    texts: texts,
    current: texts[0],
  });

  const stay = useRef(false);
  const staybt = useRef(false);
  const update = useCallback(() => {
    const addNextChar = () => {
      setState({
        ...state,
        left: state.left + state.texts[0].slice(0, 1),
        texts: state.texts.map((e: string, idx: number) =>
          idx === 0 ? e.slice(1) : e
        ),
      });
    };
    const deleteLastChar = () => {
      if (state.left.slice(0, -1) === "") {
        stay.current = true;
        staybt.current = true;
      }
      setState({
        ...state,
        left: state.left.slice(0, -1),
      });
    };
    const switchToNextText = () => {
      stay.current = false;
      staybt.current = false;
      const nextText = state.texts[1];
      setState({
        ...state,
        left: nextText.slice(0, 1),
        texts: [
          ...state.texts
            .slice(1)
            .map((e: string, idx: number) => (idx === 0 ? e.slice(1) : e)),
          state.current,
        ],
        current: nextText,
      });
    };

    if (state.texts[0].length === 0) {
      stay.current = false;
      if (state.left === "") switchToNextText();
      else deleteLastChar();
    } else addNextChar();
  }, [stay, staybt, setState, state]);

  useEffect(() => {
    setTimeout(
      () => {
        if (state.texts[0].length === 1) stay.current = true;
        window.requestAnimationFrame(update);
      },
      stay.current ? (staybt.current ? waitEnd : waitStart) : speed
    );
  }, [update]);

  return (
    <div style={{ width: 500, textAlign: "center" }}>
      <span className={"texts"}>
        {state.left}
        <span className="cursor"></span>
      </span>
    </div>
  );
}
