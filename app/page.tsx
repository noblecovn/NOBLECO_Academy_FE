import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import Section10 from "@/components/Section10";
import Section11 from "@/components/Section11";
import Section12 from "@/components/Section12";
import Section13 from "@/components/Section13";
import Section14 from "@/components/Section14";
import Section15 from "@/components/Section15";
import Section16 from "@/components/Section16";
import IntroPopup from "@/components/IntroPopup";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <IntroPopup />
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

      <AboutUs />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
    </div>
  );
}
