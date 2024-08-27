import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
      <div className="footer">
        <div className="card text-center">
          <div
            className="card-header"
            style={{ backgroundColor: "#12372A", color: "white" }}
          >
            Know Sylhet
          </div>
          <div
            className="card-body"
            style={{ backgroundColor: "#436850", color: "white" }}
          >
            <section className="card-title">Connect with the developers</section>
            <p className="card-text">
              <a href="">Shuvodip Das</a> and <a href="">Gopal Roy</a>
              <br />
              Undergrad Students, Dept. of CSE, BUET
            </p>
          </div>
        </div>
      </div>
  )
}

export default Footer;
