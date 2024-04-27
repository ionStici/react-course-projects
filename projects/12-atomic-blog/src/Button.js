import { useEffect } from "react";

function Button({ isFakeDark, setIsFakeDark }) {
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default Button;
