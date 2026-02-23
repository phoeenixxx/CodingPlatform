const VideoPlayer = ({ videoId }) => {
  if (!videoId) return null;

  return (
    <div className="aspect-w-16 aspect-h-9 w-full bg-black rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-editor-accent/10">
      <iframe
        className="w-full h-[500px]"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;