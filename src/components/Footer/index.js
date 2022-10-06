import React from "react";
import styledComponents from "styled-components";
import IconButton from "../IconButton";
import { FaFacebookF, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const bgFooter = "/footer-bg.jpg";

function Footer() {
  return (
    <FooterPane>
      <div className="container">
        <div className="list-item">
          <div className="item">
            <IconButton
              icon={<FaFacebookF />}
              link="https://www.facebook.com/anhit99/"
            />
          </div>

          <div className="item">
            <IconButton
              icon={<FaTelegramPlane />}
              link="https://t.me/phimxuahongkong?fbclid=IwAR1KDd1jsHSDIyC0sYZ9MN6ii_Jwz-hLhzyRMedyDPtTkgyV0v4zbivUDpQ"
            />
          </div>
          <div className="item">
            <IconButton
              icon={<FaYoutube />}
              link="https://www.youtube.com/channel/UCPlsjL8e17gKaxsQJlyDg3g"
            />
          </div>
        </div>
      </div>
    </FooterPane>
  );
}

export default Footer;

const FooterPane = styledComponents.div`
    background:url(${bgFooter});
    height:490px;
    position:relative;

    .container {
        position:absolute;
        bottom: 120px;
        right: 80px;
        width:100%;

        .list-item {
            display:flex;
            align-items:center;
            justify-content: flex-end;

            .item {
                margin-left:24px;
            }
        }
    }
`;
