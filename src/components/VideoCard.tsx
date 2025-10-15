import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  category: string;
  thumbnail: string;
  videoSrc?: string;
}

const VideoCard = ({ title, category, thumbnail, videoSrc }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <Play className="h-6 w-6 text-primary ml-1" fill="currentColor" />
          </div>
        </div>
        
        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-xs text-primary font-medium mb-2 block">{category}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
