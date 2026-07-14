import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  const [shiftX, setShiftX] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useLayoutEffect(() => {
    if (!open || arrowLeft == null || !panelRef.current) {
      setShiftX(0);
      return;
    }

    const clamp = () => {
      const el = panelRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pad = 12;
      let next = 0;
      if (rect.left < pad) next = pad - rect.left;
      else if (rect.right > window.innerWidth - pad) next = window.innerWidth - pad - rect.right;
      setShiftX(next);
    };

    clamp();
    window.addEventListener('resize', clamp);
    return () => window.removeEventListener('resize', clamp);
  }, [open, arrowLeft, columns, items.length]);

  const isCompact = columns === 1;
  const maxWidthClass =
    columns === 2
      ? 'w-[min(520px,calc(100vw-24px))]'
      : items.length <= 3
        ? 'w-max min-w-[180px] max-w-[220px]'
        : 'w-max min-w-[200px] max-w-[260px]';

  const gridClass =
    columns === 2
      ? 'services-dropdown__list-grid services-dropdown__list-grid--2'
      : 'services-dropdown__list-grid';

  const anchored =
    arrowLeft != null
      ? {
          left: arrowLeft,
          transform: `translateX(calc(-50% + ${shiftX}px))`,
        }
      : undefined;

  return (
    <div
      id={menuId}
      role="menu"
      aria-label={`${label} menu`}
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`services-dropdown services-dropdown--anchored hidden md:block absolute top-full z-40 pt-2 ${
        open ? 'services-dropdown--open pointer-events-auto' : 'pointer-events-none'
      }`}
      style={anchored}
    >
      <NavDropdownCaret left="50%" visible={open} />
      <div className={maxWidthClass}>
        <div
          ref={panelRef}
          className={`services-dropdown__panel ${open ? 'services-dropdown__panel--open' : ''}`}
        >
          <div className={`services-dropdown__card ${isCompact ? 'services-dropdown__card--compact' : ''}`}>
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
                    {item.label}
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
