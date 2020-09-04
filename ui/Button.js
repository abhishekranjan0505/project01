import Link from "next/link";
import { textLightColor, textDarkColor } from "../constants";

const Button = (props) => {
    const { text, url, style, color } = props;
    return (
        <>
        <div>
            <Link href={`${url}`}>
              <a
                className={`LinkBtn ${color}`}
                style={style}
              >
                {text}
              </a>
            </Link>

            <style jsx>{`
              .LinkBtn {
                text-transform: uppercase;
                position: relative;
                letter-spacing: 2.2px;
                font-weight: bold;
                font-size: 0.6875rem;
              }
          
              .LinkBtn::before {
                content: "";
                background: black;
                position: absolute;
                height: 4px;
                width: 100%;
                left: -1px;
                bottom: -7px;
              }
          
              .light {
                color: ${textLightColor};
              }
              .light::before {
                background: white;
              }
          
              .dark {
                color: ${textDarkColor};
              }
              .dark::before {
                background: black;
              }
            `}</style>
        </div>
        </>
    )
};

export default Button;