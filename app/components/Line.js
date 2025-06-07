export function GridBackgroundDemo({ children }) {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-[#010217]">
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, #2b2b3d 1px, transparent 1px), linear-gradient(to bottom, #2b2b3d 1px, transparent 1px)",
          // شيل الـ mask عشان لا يخفي النص
          // maskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          // WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          opacity: 0.3, // خفف من وضوح الشبكة عشان النص يبان
        }}
      />
      <div className="relative z-10 w-full flex justify-center px-4">
        {children}
      </div>
    </div>
  );
}
