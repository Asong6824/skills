
interface SegmentedControlProps {
  options: string[];
  selected: string;
  onChange: (option: string) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="inline-flex bg-surface-container-high rounded-r-md p-1 gap-1">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-1.5 text-body-sm rounded-r-sm transition-all duration-150 ${
            selected === option
              ? 'bg-surface-container-lowest shadow-env-sm text-on_surface font-medium'
              : 'text-on_surface_variant hover:text-on_surface'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
