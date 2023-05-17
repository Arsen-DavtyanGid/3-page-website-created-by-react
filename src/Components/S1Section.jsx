function S1Section(props) {
  return (
    <div className="S1Section-content">
      <div className="S1Section-content-icon">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="S1Section-content-text">{props.text}</div>
    </div>
  );
}
export default S1Section;
