import Image from 'next/image';

const MOCK_SPLASHES = [
  { id: 1, src: '/images/image.png', cls: 'splash-1' },
  { id: 2, src: '/images/image copy 2.png', cls: 'splash-2' },
  { id: 3, src: '/images/image copy 3.png', cls: 'splash-3' },
  { id: 4, src: '/images/image copy 4.png', cls: 'splash-4' },
  { id: 5, src: '/images/image copy 5.png', cls: 'splash-5' },
  { id: 6, src: '/images/image copy 6.png', cls: 'splash-6' },
];

export default function SplashTransformations() {
  return (
    <div className="transformations-splash">
      <div className="splash-gallery-container relative w-full min-h-[800px] mt-12 flex flex-col md:block">
        {MOCK_SPLASHES.map((splash) => (
          <div key={splash.id} className={`splash-item ${splash.cls}`}>
            <Image
              src={splash.src}
              alt="Smile Transformation"
              fill
              className="object-cover relative z-10"
              sizes="400px"
              quality={60}
            />
            <div className="splash-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
