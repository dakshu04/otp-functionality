import { useState, useRef } from "react";

export const Otp = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [disabled, setDisabled] = useState(false);

  const handleSignUp = () => {
    console.log("SignUp clicked");
    setDisabled(true);
  };

  return (
    <>
      <div className="flex">
        <SubOtp reference={ref1} onDone={() => ref2.current.focus()} onBack={() => {}} />
        <SubOtp reference={ref2} onDone={() => ref3.current.focus()} onBack={() => { ref1.current.focus(); ref1.current.value = ""; }} />
        <SubOtp reference={ref3} onDone={() => ref4.current.focus()} onBack={() => { ref2.current.focus(); ref2.current.value = ""; }} />
        <SubOtp reference={ref4} onDone={() => ref5.current.focus()} onBack={() => { ref3.current.focus(); ref3.current.value = ""; }} />
        <SubOtp reference={ref5} onDone={() => ref6.current.focus()} onBack={() => { ref4.current.focus(); ref4.current.value = ""; }} />
        <SubOtp reference={ref6} onDone={() => {}} onBack={() => { ref5.current.focus(); ref5.current.value = ""; }} />
      </div>

      <button
        onClick={handleSignUp}
        disabled={disabled}
        className={`mt-4 px-4 py-2 rounded-md text-white ${
          disabled ? "bg-gray-500" : "bg-blue-700 hover:bg-blue-800"
        }`}
      >
        Sign Up
      </button>
    </>
  );
};

export const SubOtp = ({ reference, onDone, onBack }) => {
  return (
    <input
      ref={reference}
      maxLength={1}
      className="bg-blue-500 w-[40px] h-[50px] rounded-xl outline-none text-white m-2 text-center text-xl"
      type="text"
      onChange={(e) => {
        if (e.target.value.length === 1) onDone();
      }}
      onKeyDown={(e) => {
        if (e.key === "Backspace" && !e.target.value) {
          onBack();
        }
      }}
    />
  );
};
