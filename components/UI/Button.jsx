function Button(props) {
  const classes = `${props.className} flex justify-center items-center gap-[2px] text-white font-medium px-[12px] py-[6px] rounded`;
  return (
    <button
      className={classes}
      disabled={props.disabled === "true"}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  );
}

export default Button;
