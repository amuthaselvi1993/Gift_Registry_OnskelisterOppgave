import "./KidsWishListCard.css";
import Wishes from "./Wishes";
import styled, { keyframes } from "styled-components";

// Keyframes for glitter animation
const glitterAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const GlitterBorder = styled.div`
  #glittering {
    font-family: christmasText;
    font-size: 2em;
    padding: 10px;
    border: 3px solid transparent;
    border-image: linear-gradient(
      45deg,
      #ff9a9e,
      #fad0c4,
      #fbc2eb,
      #a18cd1,
      #fbc2eb,
      #ff9a9e border-image-slice: 1; animation: ${glitterAnimation} 3s ease
        infinite; background:
        linear-gradient(
          45deg,
          #ff9a9e,
          #fad0c4,
          #fbc2eb,
          #a18cd1,
          #fbc2eb,
          #ff9a9e
        )
        ; background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color:
        transparent; color: #000;
    );
  }
`;
export default function KidsWishListCard({
  kid: { id, name, age, wishlist, naughty },
}) {
  return (
    <>
      <GlitterBorder>
        <div
          id="kidDetails"
          className={`glow-text ${naughty ? "glittering" : ""}`}
        >
          <div className="info">
            <p className="name">
              {id}. {name}
            </p>
            <p className="age">Alder: {age}</p>
            {naughty ? (
              <p style="writing-mode: vertical-rl; text-align: center; padding: 10px;">
                SNILLE BARN
              </p>
            ) : null}
          </div>

          <div id="Wishes">
            {wishlist.map((wish, index) => {
              return <Wishes key={index} wish={wish} />;
            })}
          </div>
        </div>
      </GlitterBorder>
    </>
  );
}
