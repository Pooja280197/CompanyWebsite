import BlueTinkLogo from '../assets/Clients/BlueThinkLogo.png';
import CareerWaveLogo from '../assets/Clients/CareerWaveLogo.png';
import ChowguleLogo from '../assets/Clients/ChowguleLogo.png';
import CrickBro from '../assets/Clients/CrickBro.jpg';
import DataInfaLogo from '../assets/Clients/DataInfaLogo.jpg';
import ExatipTechnologies from '../assets/Clients/ExatipTechnologies.jpg';
import MindefyLogo from '../assets/Clients/MindefyLogo.jpg';
import RRCATLOGO from '../assets/Clients/RRCATLOGO.png';
import ShyamFutureTech from '../assets/Clients/ShyamFutureTech.jpg';
import SiyaTechLogo from '../assets/Clients/SiyaTechLogo.png';
import SMTLabsLogo from '../assets/Clients/SMTLabsLogo.jpg';
import Techlene from '../assets/Clients/Techlene.jpg';

const LOGOS = [
  { src: BlueTinkLogo, name: 'Blue Think' },
  { src: CareerWaveLogo, name: 'Career Wave' },
  { src: ChowguleLogo, name: 'Chowgule' },
  { src: CrickBro, name: 'CrickBro' },
  { src: DataInfaLogo, name: 'Data Infa' },
  { src: ExatipTechnologies, name: 'Exatip Technologies' },
  { src: MindefyLogo, name: 'Mindefy' },
  { src: RRCATLOGO, name: 'RRCAT' },
  { src: ShyamFutureTech, name: 'Shyam Future Tech' },
  { src: SiyaTechLogo, name: 'Siya Tech' },
  { src: SMTLabsLogo, name: 'SMT Labs' },
  { src: Techlene, name: 'Techlene' },
];

const items = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function Marquee() {
  return (
    <section className="bg-white pt-2 pb-8 border-b border-[#f0f0f0] overflow-hidden">
      <div className="marquee-track">
        {items.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="marquee-item">
            <div className="marquee-logo-box">
              <img
                src={logo.src}
                alt={logo.name}
                className="marquee-logo-img"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
