const Footer = (props) => {
  return (
    <div className="div">
      <button className="remove-button" onClick={props.deleteAllTodos}>
        Удалить все тудушки
      </button>
    </div>
  );
};

export default Footer;
