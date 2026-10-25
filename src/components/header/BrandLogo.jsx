import Image from "next/image";
import cn from "classnames";

// The logo SVG's artboard has wide empty margins around the wordmark.
// These numbers are the artboard size and the ink bounds inside it, so the
// rendered box can be cropped to what is visible: the logo then sizes by
// its real height and lines up with the page's content edge.
const ARTBOARD = { width: 6165.57, height: 2774.76 };
const INK = { x: 605, y: 599, width: 4954, height: 1575 };

/** West Valley wordmark, cropped to its ink. Size it with a height class (e.g. `h-8`). */
function BrandLogo({ className }) {
  return (
    <span
      className={cn("relative block", className)}
      style={{ aspectRatio: `${INK.width} / ${INK.height}` }}
    >
      <Image
        src="/rebranding/logoSVGs/westvalleyBlack_logo_no_bg.svg"
        alt="West Valley Hair & Skin Clinic"
        width={230}
        height={104}
        loading="eager"
        className="absolute h-auto max-w-none"
        style={{
          width: `${(ARTBOARD.width / INK.width) * 100}%`,
          left: `${(-INK.x / INK.width) * 100}%`,
          top: `${(-INK.y / INK.height) * 100}%`,
        }}
      />
    </span>
  );
}

export default BrandLogo;
