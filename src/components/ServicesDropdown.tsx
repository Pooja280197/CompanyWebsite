import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICE_MEGA_COLUMNS } from '../data/serviceItems';
import { NavDropdownCaret } from './NavDropdownCaret';

interface Props {
  open: boolean;
  menuId: string;
  arrowLeft?: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

function isItemActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function ServicesDropdown({
  open,
  menuId,
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

  let linkIndex = 0;

  return (
    <div
      id={menuId}
      role="menu"
      aria-label="Services menu"
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`services-dropdown hidden lg:block absolute inset-x-0 top-full z-40 pt-2 ${
        open ? 'services-dropdown--open pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <NavDropdownCaret left={arrowLeft} visible={open} />
      <div className="services-dropdown__shell">
        <div
          ref={panelRef}
          className={`services-dropdown__panel ${open ? 'services-dropdown__panel--open' : ''}`}
        >
          <div className="services-dropdown__card">
            <div className="services-dropdown__shine" aria-hidden="true" />
            <div className="services-dropdown__grid">
              {SERVICE_MEGA_COLUMNS.map((column, colIndex) => {
                const titleDelay = linkIndex++;
                return (
                <div
                  key={column.id}
                  className={`services-dropdown__col ${open ? 'services-dropdown__col--in' : ''}`}
                  style={{ transitionDelay: open ? `${colIndex * 55 + 60}ms` : '0ms' }}
                  role="group"
                  aria-label={column.title}
                >
                  <h3 className="services-dropdown__col-title">
                    <Link
                      to={column.href}
                      role="menuitem"
                      onClick={onClose}
                      aria-label={`View ${column.title} overview`}
                      aria-current={isItemActive(pathname, column.href) ? 'page' : undefined}
                      className={`services-dropdown__link services-dropdown__link--heading ${open ? 'services-dropdown__link--in' : ''} ${
                        isItemActive(pathname, column.href) ? 'services-dropdown__link--active' : ''
                      }`}
                      style={{ transitionDelay: open ? `${titleDelay * 28 + 100}ms` : '0ms' }}
                    >
                      {column.title}
                    </Link>
                  </h3>
                  {column.items.length > 0 && (
                  <ul className="services-dropdown__list">
                    {column.items.map((item) => {
                      const delay = linkIndex++;
                      return (
                        <li key={item.id}>
                          <Link
                            to={item.href}
                            role="menuitem"
                            onClick={onClose}
                            aria-current={isItemActive(pathname, item.href) ? 'page' : undefined}
                            className={`services-dropdown__link ${open ? 'services-dropdown__link--in' : ''} ${
                              isItemActive(pathname, item.href) ? 'services-dropdown__link--active' : ''
                            }`}
                            style={{ transitionDelay: open ? `${delay * 28 + 100}ms` : '0ms' }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  )}
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesMobileList({ onNavigate }: { onNavigate: () => void }) {
  const { pathname } = useLocation();

  return (
    <div>
      {SERVICE_MEGA_COLUMNS.map((column) => (
        <div key={column.id} className="mmenu__group">
          <h3 className="mmenu__group-title">
            <Link
              to={column.href}
              onClick={onNavigate}
              aria-label={`View ${column.title} overview`}
              aria-current={isItemActive(pathname, column.href) ? 'page' : undefined}
              className={`mmenu__sublink mmenu__sublink--heading${
                isItemActive(pathname, column.href) ? ' mmenu__sublink--active' : ''
              }`}
            >
              {column.title}
            </Link>
          </h3>
          {column.items.length > 0 && (
            <ul className="mmenu__list">
              {column.items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    onClick={onNavigate}
                    aria-current={isItemActive(pathname, item.href) ? 'page' : undefined}
                    className={`mmenu__sublink${
                      isItemActive(pathname, item.href) ? ' mmenu__sublink--active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
