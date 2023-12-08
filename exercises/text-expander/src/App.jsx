import { useState } from "react";
import PropTypes from "prop-types";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className={["box"]}>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  className = [],
  children,
  collapsedNumWords = 10,
  expanded = false,
  buttonColor = "#333",
  expandButtonText = "Show Text",
  collapseButtonText = "Show Less",
}) {
  const [expand, setExpand] = useState(expanded);

  const collapsedText =
    children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const btnStyles = {
    color: buttonColor,
    marginLeft: "8px",
  };

  return (
    <div className={[...className]}>
      <p>
        {expand ? children : collapsedText}
        <button style={btnStyles} onClick={() => setExpand((prev) => !prev)}>
          {expand ? collapseButtonText : expandButtonText}
        </button>
      </p>
    </div>
  );
}

TextExpander.propTypes = {
  className: PropTypes.array,
  children: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  expanded: PropTypes.bool,
  buttonColor: PropTypes.string,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
};
