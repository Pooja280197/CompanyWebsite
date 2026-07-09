import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavMegaItem } from '../data/navProducts';
import { NavDropdownCaret } from './NavDropdownCaret';

interface Props {
  open: boolean;
  menuId: string;
  label: string;
  items: NavMegaItem[];
  columns?: 1 | 2;
  arrowLeft?: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

function isItemActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavListDropdown({
  open,
  menuId,
  label,
  items,
  columns = 1,
  arrowLeft = null,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const gridClass =
    columns === 2
      ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0'
      : 'grid grid-cols-1 gap-y-0';

  return (
    <div
      id={menuId}
      role="menu"
      aria-label={`${label} menu`}
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`services-dropdown hidden md:block absolute inset-x-0 top-full z-40 pt-2 ${
        open ? 'services-dropdown--open pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <NavDropdownCaret left={arrowLeft} visible={open} />
      <div className={`mx-auto px-4 ${columns === 2 ? 'max-w-[720px]' : 'max-w-[420px]'}`}>
        <div
          ref={panelRef}
          className={`services-dropdown__panel ${open ? 'services-dropdown__panel--open' : ''}`}
        >
          <div className="services-dropdown__card">
            <div className="services-dropdown__shine" aria-hidden="true" />
            <div className={gridClass}>
              {items.map((item, index) => {
                const active = isItemActive(pathname, item.href);
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    role="menuitem"
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    className={`services-dropdown__link block ${open ? 'services-dropdown__link--in' : ''} ${
                      active ? 'services-dropdown__link--active' : ''
                    }`}
                    style={{ transitionDelay: open ? `${index * 28 + 100}ms` : '0ms' }}
                  >
                    <span className="block font-medium text-[0.9rem] leading-snug">{item.label}</span>
                    {item.description && (
                      <span className="mt-0.5 block text-[0.72rem] leading-snug text-[#6b7280] font-sans font-normal">
                        {item.description}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NavListMobileList({
  items,
  onNavigate,
}: {
  items: NavMegaItem[];
  onNavigate: () => void;
}) {
  const { pathname } = useLocation();

  return (
    <ul className="services-dropdown__list mt-1 pb-4 space-y-0">
      {items.map((item) => {
        const active = isItemActive(pathname, item.href);
        return (
          <li key={item.id}>
            <Link
              to={item.href}
              onClick={onNavigate}
              aria-current={active ? 'page' : undefined}
              className={`services-dropdown__link text-base py-3 opacity-100 translate-y-0 ${
                active ? 'services-dropdown__link--active' : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
