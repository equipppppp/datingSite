function Quality({ name, color }) {
  return <div className={"badge m-1 bg-" + color}>{name}</div>;
}

export default Quality;
