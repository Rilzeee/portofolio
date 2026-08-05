import "./Loading.css";

function Loading({ fadeOut = false }) {
  return (
    <div className={`loading-overlay ${fadeOut ? "fade-out" : ""}`}>
      {/* Glow dekoratif halus */}
      <div className="loading-glow loading-glow--1" />
      <div className="loading-glow loading-glow--2" />

      <div className="loading-content">
{/* Logo MHA — monogram tersambung tanpa kotak */}
        <div className="loading-monogram" aria-label="MHA">
<svg viewBox="0 0 300 100" className="mg-svg" fill="none">
            {/* M */}
            <path
              className="mg-stroke"
              d="M55 80 V20 L80 55 L105 20 V80"
            />
            {/* H */}
            <path
              className="mg-stroke"
              d="M130 20 V80 M130 50 H170 M170 20 V80"
            />
            {/* A */}
            <path
              className="mg-stroke"
              d="M195 80 L220 20 L245 80 M205 58 H235"
            />
            {/* Garis penghubung bawah */}
            <path className="mg-underline" d="M55 90 H245" />
          </svg>
        </div>

        {/* Nama */}
        <h1 className="loading-name">Muhammad Hafizh Arasyid</h1>

        {/* Progress bar */}
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>

        <p className="loading-sub">Loading Your Experience...</p>
      </div>
    </div>
  );
}

export default Loading;
