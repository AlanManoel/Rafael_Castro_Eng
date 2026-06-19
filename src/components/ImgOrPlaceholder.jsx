import { PlaceholderIcon } from "./Icons";

export default function ImgOrPlaceholder({ src, alt, style = {}, className = "" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }}
      />
    );
  }
  return (
    <div className="img-placeholder">
      <PlaceholderIcon />
      <span>{alt}</span>
    </div>
  );
}
