// src/pages/Dashboard/SettingsPage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SettingsPage = () => {
  const location = useLocation();

  const [notifications, setNotifications] = useState("Email Only");
  const [theme, setTheme] = useState(() => localStorage.getItem("app-theme") || "Light");
  const [timeout, setTimeout] = useState(15);
  const [twoFactor, setTwoFactor] = useState(true);
  const [autoUpdates, setAutoUpdates] = useState(false);
  const [backupTime, setBackupTime] = useState("02:00");

  // Apply theme globally
  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem("app-theme", theme);

    if (theme === "Dark") {
      root.classList.add("dark");
      root.style.setProperty("--text-color", "#facc15"); // yellow-400
      root.style.setProperty("--bg-color", "#0f172a"); // dark bg
    } else {
      root.classList.remove("dark");
      root.style.setProperty("--text-color", "#1e293b"); // slate-800
      root.style.setProperty("--bg-color", "#ffffff");
    }
  }, [theme, location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors p-6">
      <Card>
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Notification Preferences */}
          <div>
            <Label className="font-semibold">Notification Preferences</Label>
            <select
              value={notifications}
              onChange={(e) => setNotifications(e.target.value)}
              className="w-full border px-4 py-2 rounded mt-1"
            >
              <option>Email Only</option>
              <option>SMS Only</option>
              <option>Email + SMS</option>
              <option>Push Notifications</option>
            </select>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <Label className="font-semibold">Enable Dark Theme</Label>
            <Switch
              checked={theme === "Dark"}
              onCheckedChange={(checked) => setTheme(checked ? "Dark" : "Light")}
            />
          </div>

          {/* Security Timeout */}
          <div>
            <Label className="font-semibold">Security Timeout (mins)</Label>
            <Input
              type="number"
              value={timeout}
              onChange={(e) => setTimeout(Number(e.target.value))}
              className="mt-1"
            />
          </div>

          {/* Enable 2FA */}
          <div className="flex items-center justify-between">
            <Label className="font-semibold">Enable Two-Factor Authentication</Label>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>

          {/* Automatic Updates */}
          <div className="flex items-center justify-between">
            <Label className="font-semibold">Enable Automatic Updates</Label>
            <Switch checked={autoUpdates} onCheckedChange={setAutoUpdates} />
          </div>

          {/* Backup Schedule */}
          <div>
            <Label className="font-semibold">Daily Backup Time</Label>
            <Input
              type="time"
              value={backupTime}
              onChange={(e) => setBackupTime(e.target.value)}
              className="mt-1"
            />
          </div>

          <Separator />

          <div className="text-right">
            <Button className="bg-hospital-primary text-white">Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
