import icon4 from "./images/s1icon4.svg";

function S1Box(props) {
  return (
    <div className="section1-left-part">
      <div className="section1-left-part-text1">{props.text1}</div>
      <div className="section1-left-part-text22">{props.text2}</div>
      <div className="section1-left-part-icon">
        <img src={icon4} alt="icon" />
      </div>
    </div>
  );
}
export default S1Box;
