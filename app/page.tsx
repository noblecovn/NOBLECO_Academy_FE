import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full" style={{ aspectRatio: "640 / 360" }}>
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dtmtycf0d&public_id=clip_60s-web_rv4y1n&profile=cld-looping"
          width={640}
          height={360}
          style={{
            height: "100%",
            width: "100%",
            border: "none",
            position: "absolute",
            top: 0,
            left: 0
          }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy" // Lazy load video để cải thiện FCP
          title="Nobleco Video"
        />
      </div>
    </div>
  );
}
