function AnchorTag({ children }) {
  return (
    <div className="h-min-[20px] mb-2">
      <a className="page-footer__link" href="#" target="_blank">
        {children}
      </a>
    </div>
  );
}

export default AnchorTag;
