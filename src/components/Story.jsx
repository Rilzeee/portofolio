import CircularGallery from "./CircularGallery";
import "./Story.css";

const STORY_ITEMS = Array.from({ length: 12 }, (_, i) => ({
image: `story/${i + 1}.jpeg`,
  text: `Story ${i + 1}`,
}));

function Story() {
  return (
    <section className="story" id="story">
      <h2>STORY</h2>

      <div className="story-gallery">
        <CircularGallery
          items={STORY_ITEMS}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          font="bold 26px Orbitron"
          fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  );
}

export default Story;

