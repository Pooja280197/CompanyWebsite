import type { HeroImageConfig } from '../data/heroImages';

interface Props {
  image: HeroImageConfig;
}

export function ServiceHeroBackground({ image }: Props) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="webdev-hero__base" />
      <div className="webdev-hero__img-panel">
        <img
          src={image?.src}
          alt=""
          className="webdev-hero__img h-full w-full object-cover"
          style={{ objectPosition: image.objectPosition ?? '88% center' }}
        />
        <div className="webdev-hero__img-panel-fade" />
      </div>
      <div className="webdev-hero__overlay webdev-hero__overlay--dark" />
    </div>
  );
}
