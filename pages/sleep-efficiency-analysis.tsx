import { useEffect } from "react";

export default function SleepEfficiency() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1cXbHqC1w4V7kPimaGGwNIlFYZnF64wiV/view";
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

