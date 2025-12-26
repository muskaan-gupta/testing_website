import { useRef, useEffect } from "react";


const Organogram = () => {
  const videoRef = useRef(null);

  // Ensure video plays on component mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="h-[155vh] relative overflow-hidden mt-4">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          {/* Add multiple source formats for better browser compatibility */}
          <source src="/organogram_1.mp4" type="video/mp4" />
        
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      
      </div>

    
      
      
    </div>
  );
};

export default Organogram;