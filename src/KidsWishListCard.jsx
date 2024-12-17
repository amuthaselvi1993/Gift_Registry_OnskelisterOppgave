import "./KidsWishListCard.css";
import Wishes from "./Wishes";
import styled, { keyframes } from "styled-components";

export default function KidsWishListCard({
  kid: { id, name, age, wishlist, naughty },
}) {
  return (
    <>
      <div
        id="kidDetails"
        className={`${naughty ? "glittering" : "glow-text"}`}
      >
        <div className="info">
          <p className="name">
            {id}. {name}
          </p>
          <p className="age">{age} år gammel</p>
        </div>
        <div id="nice-kid">
          {naughty ? (
            <p className="text-style">
              <span>S</span>
              <span>N</span>
              <span>I</span>
              <span>L</span>
              <span>L</span>
              <span>E</span>
              <span>B</span>
              <span>A</span>
              <span>R</span>
              <span>N</span>
              <span>🎅🏻</span>
            </p>
          ) : null}
        </div>

        <div id="wishlist">
          <p>Ønskeliste :</p>
          {wishlist.map((wish, index) => {
            return <Wishes key={index} wish={wish} />;
          })}
        </div>
      </div>
    </>
  );
}
