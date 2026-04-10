import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 500); // kasih delay biar fade out smooth
    }, 3000); // durasi loading

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-black transition-opacity duration-500
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <DotLottieReact
        src="https://lottie.host/41c34658-a523-4b6f-9d12-71e440b84233/0oNKwU1Brs.lottie"
        autoplay
        loop
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}