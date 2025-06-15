function Button(props) {
  return (
    <button {...props} className="p-2 text-white rounded-md bg-slate-400">
      {props.children}
    </button>
  );
}

export default Button;
