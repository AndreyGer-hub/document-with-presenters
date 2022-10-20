function Body({ data }) {
  return (
    <pre style={{ backgroundColor: "#fee", padding: "30px" }}>
      Body: <br />
      {JSON.stringify(data, 4, 4)}
    </pre>
  );
}

export default Body;
