import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_MEGA_COLUMNS } from '../data/serviceItems';

interface Props {
  open: boolean;
  menuId: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

export function ServicesDropdown({
  open,
  menuId,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  let linkIndex = 0;

  return (
    <div
      id={menuId}
      role="menu"
      aria-label="Services menu"
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`services-dropdown hidden md:block absolute inset-x-0 top-full z-40 pt-2 ${
        open ? 'services-dropdown--open pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="max-w-[920px] mx-auto px-4">
        <div
          ref={panelRef}
          className={`services-dropdown__panel ${open ? 'services-dropdown__panel--open' : ''}`}
        >
          <div className="services-dropdown__card">
            <div className="services-dropdown__shine" aria-hidden="true" />
            <div className="services-dropdown__grid">
              {SERVICE_MEGA_COLUMNS.map((column, colIndex) => (
                <div
                  key={column.id}
                  className={`services-dropdown__col ${open ? 'services-dropdown__col--in' : ''}`}
                  style={{ transitionDelay: open ? `${colIndex * 55 + 60}ms` : '0ms' }}
                  role="group"
                  aria-label={column.title}
                >
                  <h3 className="services-dropdown__col-title">{column.title}</h3>
                  <ul className="services-dropdown__list">
                    {column.items.map((item) => {
                      const delay = linkIndex++;
                      return (
                        <li key={item.id}>
                          <Link
                            to={item.href}
                            role="menuitem"
                            onClick={onClose}
                            className={`services-dropdown__link ${open ? 'services-dropdown__link--in' : ''}`}
                            style={{ transitionDelay: open ? `${delay * 28 + 100}ms` : '0ms' }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesMobileList({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mt-1 pb-4 space-y-6">
      {SERVICE_MEGA_COLUMNS.map((column) => (
        <div key={column.id}>
          <p className="services-dropdown__col-title text-base mb-0 pb-3">{column.title}</p>
          <ul className="services-dropdown__list">
            {column.items.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  onClick={onNavigate}
                  className="services-dropdown__link text-lg py-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
