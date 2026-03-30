
interface SidebarProps {
  activeTab: 'global' | 'projects';
  onTabChange: (tab: 'global' | 'projects') => void;
  globalSkills: { name: string }[];
  projects: { name: string; path: string; count: number }[];
  selectedSkill?: string;
  onSkillSelect?: (name: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  globalSkills,
  projects,
  selectedSkill,
  onSkillSelect,
}) => {
  return (
    <div className="w-56 bg-surface_container_low flex flex-col h-full">
      <div className="p-spacing-4">
        <div className="inline-flex bg-surface-container-high rounded-r-md p-1">
          <button
            onClick={() => onTabChange('global')}
            className={`px-3 py-1 text-body-sm rounded-r-sm transition-all ${
              activeTab === 'global'
                ? 'bg-surface_container_lowest shadow-env-sm text-on_surface font-medium'
                : 'text-on_surface_variant hover:text-on_surface'
            }`}
          >
            Global
          </button>
          <button
            onClick={() => onTabChange('projects')}
            className={`px-3 py-1 text-body-sm rounded-r-sm transition-all ${
              activeTab === 'projects'
                ? 'bg-surface_container_lowest shadow-env-sm text-on_surface font-medium'
                : 'text-on_surface_variant hover:text-on_surface'
            }`}
          >
            Projects
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-spacing-4">
        {activeTab === 'global' ? (
          <div className="space-y-spacing-1">
            {globalSkills.map((skill) => (
              <button
                key={skill.name}
                onClick={() => onSkillSelect?.(skill.name)}
                className={`w-full text-left px-3 py-2 rounded-r-sm text-body-sm transition-colors ${
                  selectedSkill === skill.name
                    ? 'bg-surface_container_highest text-on_surface'
                    : 'text-on_surface_variant hover:bg-surface-container-high hover:text-on_surface'
                }`}
              >
                {skill.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-spacing-3">
            {projects.map((project) => (
              <div key={project.path}>
                <div className="text-body-sm font-medium text-on_surface mb-spacing-1">
                  {project.name}
                </div>
                <div className="space-y-spacing-1 pl-3">
                  <div className="text-label-sm text-on_surface_variant">
                    {project.count} skills
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-spacing-4 border-t border-surface-container-high">
        <button className="w-full px-3 py-2 text-body-sm text-primary hover:bg-surface-container-high rounded-r-sm transition-colors text-left">
          + Add Project
        </button>
      </div>
    </div>
  );
};
