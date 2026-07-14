interface Props {
  left: number | string | null;
  visible: boolean;
}

/** Upward caret connecting dropdown panel to navbar trigger */
export function NavDropdownCaret({ left, visible }: Props) {
  if (!visible || left == null) return null;

  return (
    <span
      className="services-dropdown__caret"
      style={{ left }}
      aria-hidden="true"
    />
  );
}
