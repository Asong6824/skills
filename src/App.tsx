import { useState } from 'react';
import { TitleBar, StatusBar, Sidebar } from './components/layout';
import { Input } from './components/ui';

function App() {
  const [activeTab, setActiveTab] = useState<'global' | 'projects'>('global');
  const [selectedSkill, setSelectedSkill] = useState<string | undefined>();

  const globalSkills = [
    { name: 'baoyu-translate' },
    { name: 'claude-api' },
    { name: 'loop' },
    { name: 'simplify' },
  ];

  const projects = [
    { name: 'project-Skills', path: '/path/to/project', count: 3 },
  ];

  return (
    <div className="h-screen flex flex-col bg-surface">
      <TitleBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          globalSkills={globalSkills}
          projects={projects}
          selectedSkill={selectedSkill}
          onSkillSelect={setSelectedSkill}
        />
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="p-spacing-4 border-b border-surface-container-low">
            <Input placeholder="Search skills..." />
          </div>
          <div className="flex-1 p-spacing-8">
            <h1 className="text-display-md text-on_surface mb-spacing-4">
              Skill Workspace
            </h1>
            <p className="text-body-lg text-on_surface_variant">
              Select a skill to view details
            </p>
          </div>
        </main>
      </div>
      <StatusBar globalCount={4} projectCount={1} />
    </div>
  );
}

export default App;
