export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <img 
        src="/hero-bg.png" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
    </div>
  );
}
