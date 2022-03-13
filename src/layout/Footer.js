import React from "react";

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 text-center bg-dark text-light">
            Developed By: {""}
            <span className="text-warning font-weight-normal">
              Haris Pašić, {""}
            </span>
            <a
              href="https://newsapi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NEWSAPI,
            </a>
            <a
              href="https://waltercode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {""} WALTERCODE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
