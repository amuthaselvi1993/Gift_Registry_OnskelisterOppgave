import "./KidsWishListCard.css";
import Wishes from "./Wishes";
export default function KidsWishListCard({
  kid: { id, name, age, wishlist, naughty },
}) {
  return (
    <>
      <div id="kidDetails" className={naughty ? "glittering" : ""}>
        <h2>{id}</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <div id="Wishes">
          {wishlist.map((wish, index) => {
            return <Wishes key={index} wish={wish} />;
          })}
        </div>
        <p>Naughty: {naughty ? "Yes" : "No"}</p>
      </div>
    </>
  );
}
