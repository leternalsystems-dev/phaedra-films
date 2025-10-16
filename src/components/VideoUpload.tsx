import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, X, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VideoUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const videoFiles = files.filter(file => file.type.startsWith('video/'));
    
    if (videoFiles.length !== files.length) {
      toast({
        title: "Invalid Files",
        description: "Only video files are allowed",
        variant: "destructive",
      });
    }
    
    setSelectedFiles(prev => [...prev, ...videoFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      toast({
        title: "No Files",
        description: "Please select video files to upload",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Upload Ready",
      description: "Video upload requires backend integration. Contact us to enable cloud storage.",
    });
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 border border-primary/30 rounded-full bg-primary/5">
            <span className="text-primary text-sm font-medium">Upload</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Share Your Videos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload your video files to showcase your work
          </p>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
              <Input
                type="file"
                accept="video/*"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="video-upload"
              />
              <label htmlFor="video-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium mb-2">Click to upload videos</p>
                <p className="text-sm text-muted-foreground">
                  WebM, MP4, MOV up to 500MB each
                </p>
              </label>
            </div>

            {selectedFiles.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold">Selected Files ({selectedFiles.length})</h3>
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={handleUpload}
              disabled={selectedFiles.length === 0}
            >
              Upload Videos
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoUpload;
