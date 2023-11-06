function Cirlelayout({ children, className, onClickHandler }) {
  const classes = `w-12 h-12 rounded-[50px]  flex items-center justify-center cursor-pointer ${className} shadow-[0_2px_3px_rgba(0,0,0,0.3)]`;
  return (
    <div className={classes} onClick={onClickHandler}>
      {children}
    </div>
  );
}

export default Cirlelayout;
