
interface StatusBarProps {
  globalCount: number;
  projectCount: number;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  globalCount,
  projectCount,
}) => {
  return (
    <div className="h-7 bg-surface_container_low flex items-center justify-between px-4 text-label-sm text-on_surface_variant">
      <div className="flex items-center gap-4">
        <span>Ready</span>
        <span>Global: {globalCount} skills</span>
        <span>Projects: {projectCount}</span>
      </div>
    </div>
  );
};
