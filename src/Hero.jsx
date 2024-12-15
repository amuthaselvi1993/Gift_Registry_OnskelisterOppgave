import "./Hero.css";
import KidsWishListCard from "./KidsWishListCard";
import video from "./assets/bg-video.mp4";
import kidsWishlist from "./assets/wishlist";

export default function Hero() {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="hero-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div id="mainContainer">
        <h1> Julegaveliste Fra Barn!</h1>
        <div id="kids-list">
          {kidsWishlist.map((kid) => {
            return <KidsWishListCard key={kid.id} kid={kid} />;
          })}
        </div>
      </div>

      <div id="credits">
        <p>
          Video by :
          <a
            href="https://www.vecteezy.com/free-videos/christmas-cartoon-background"
            target="_blank"
          >
            Christmas Cartoon Background Stock Videos by Vecteezy
          </a>
        </p>
      </div>
    </div>
  );
}
