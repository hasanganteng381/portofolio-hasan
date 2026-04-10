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
        src="https://lottie.host/0c168786-4995-4d73-9a00-0c315442512e/i2LWbbE7IV.lottie"
        autoplay
        loop
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}