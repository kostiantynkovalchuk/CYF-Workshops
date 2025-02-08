import PropTypes from "prop-types";

function Logo(props) {
  return (
    <img
      src={props.src}
      alt="Logo"
      onClick={props.handleClick}
      style={{ cursor: "pointer", width: "100px" }}
    />
  );
}
Logo.propTypes = {
  src: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Logo;
