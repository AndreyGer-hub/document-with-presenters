function Footer({ data }) {
  return (
    <pre style={{ backgroundColor: "#efe", padding: "30px" }}>
      Footer: <br />
      {JSON.stringify(data, 4, 4)}
    </pre>
  );
}

export default Footer;
