import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";

const Settings = () => {
  return (
    <>
      <DivineBackground />
      <AppShell>
        <h1 className="mb-4 font-display text-3xl font-semibold">Settings</h1>
        <div className="space-y-4">
          <div className="parchment p-4">
            <h2 className="font-display text-lg font-semibold mb-2">Appearance</h2>
            <p className="text-sm text-muted-foreground">Theme and display preferences</p>
          </div>
          <div className="parchment p-4">
            <h2 className="font-display text-lg font-semibold mb-2">Audio</h2>
            <p className="text-sm text-muted-foreground">Chime and vibration settings</p>
          </div>
        </div>
      </AppShell>
    </>
  );
};

export default Settings;
