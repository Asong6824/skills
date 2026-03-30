
export const TitleBar: React.FC = () => {
  return (
    <div data-tauri-drag-region className="h-9 bg-surface_container_low flex items-center justify-between px-4">
      <div className="flex items-center gap-2" data-tauri-drag-region>
        <span className="text-label-sm text-on_surface_variant">Skill Manager</span>
      </div>
      <div className="flex items-center">
        <button
          className="w-11 h-9 flex items-center justify-center hover:bg-surface-container-high text-on_surface_variant hover:text-on_surface transition-colors"
          title="Minimize"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect y="5" width="12" height="1.5" fill="currentColor" />
          </svg>
        </button>
        <button
          className="w-11 h-9 flex items-center justify-center hover:bg-surface-container-high text-on_surface_variant hover:text-on_surface transition-colors"
          title="Maximize"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="1" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </button>
        <button
          className="w-11 h-9 flex items-center justify-center hover:bg-error text-white transition-colors"
          title="Close"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};
