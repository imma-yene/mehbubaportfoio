import Fade from "react-reveal";
function Footer(){
return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">networks</ul>

            <ul className="copyright">
              <li>&copy; Mehbubazed</li>
              <li>
                  2022 
              </li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
