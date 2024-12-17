import KidsWishListCard from "./KidsWishListCard";
import video from "./assets/bg-video.mp4";
import kidsWishlist from "./assets/wishlist";
import * as Styles from "./HeroStyle";

export default function Hero() {
  return (
    <Styles.VideoBackground>
      <Styles.HeroVideo autoPlay loop muted className="hero-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </Styles.HeroVideo>

      <Styles.MainContainer>
        <Styles.Heading>🎄❄️Julegaveliste Fra Barn!🎄❄️</Styles.Heading>
        <Styles.KidsList>
          {kidsWishlist.map((kid) => {
            return <KidsWishListCard key={kid.id} kid={kid} />;
          })}
        </Styles.KidsList>
      </Styles.MainContainer>

      <Styles.Credits>
        <p>
          Video by :
          <Styles.CreditsLink
            href="https://www.vecteezy.com/free-videos/christmas-cartoon-background"
            target="_blank"
          >
            Christmas Cartoon Background Stock Videos by Vecteezy
          </Styles.CreditsLink>
        </p>
      </Styles.Credits>
    </Styles.VideoBackground>
  );
}
