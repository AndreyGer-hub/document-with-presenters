function Header({ data }) {
  return (
    <pre style={{ backgroundColor: "#eef", padding: "30px" }}>
      Header: <br />
      {JSON.stringify(data, 4, 4)}
    </pre>
  );
}
export default Header;
