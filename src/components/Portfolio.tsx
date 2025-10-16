import VideoCard from "./VideoCard";
import weddingThumb from "@/assets/wedding-thumb.jpg";
import corporateThumb from "@/assets/corporate-thumb.jpg";
import musicThumb from "@/assets/music-thumb.jpg";
import documentaryThumb from "@/assets/documentary-thumb.jpg";

const Portfolio = () => {
  const videos = [
    {
      title: "Jumoke & Abiola Wedding",
      category: "Wedding",
      thumbnail: weddingThumb,
      videoSrc: "/videos/wedding.webm"
    },
    {
      title: "TechCorp Brand Story",
      category: "Corporate",
      thumbnail: corporateThumb,
      videoSrc: "/videos/corporate.webm"
    },
    {
      title: "Yaran NorthSide Tour",
      category: "Music Video",
      thumbnail: musicThumb,
      videoSrc: "/videos/music.webm"
    },
    {
      title: "Wild Horizons",
      category: "Documentary",
      thumbnail: documentaryThumb,
      videoSrc: "/videos/documentary.webm"
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-full bg-primary/5">
            <span className="text-primary text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of our most recent and impactful videography work across various genres
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
