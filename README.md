# Mini-ERP für Logistik

Eine kleine Angular-Anwendung mit Login, geschütztem Bereich und rollenbasierter Navigation — entwickelt im Rahmen der Angular Home Challenge.

Statt generischer Beispielseiten ist die App thematisch an ein ERP-System für Produktion und Logistik angelehnt, um fachliche Nähe zum Aufgabenkontext zu zeigen.

## Demo-Zugänge

Da kein echtes Backend gefordert ist, sind zwei Mock-Benutzer mit unterschiedlichen Rollen hinterlegt:

| Benutzername | Passwort   | Rolle    |
| ------------ | ---------- | -------- |
| `admin`      | `admin123` | Manager  |
| `lager`      | `lager123` | Employee |

Manager sehen zusätzlich den Menüpunkt "Einstellungen", Employees nicht.

## Tests

Unit Tests für `AuthService`, `authGuard` und `roleGuard` mit Vitest (Angular 22s neuer Standard-Test-Runner, ersetzt das alte Karma/Jasmine-Setup).

```bash
ng test
```

**Herausforderung während der Entwicklung:** In reinen Service-/Guard-Spec-Dateien (ohne Komponenten-Import) war `localStorage` in der von Angular generierten Vitest-Umgebung nicht verfügbar — selbst der `// @vitest-environment jsdom`-Kommentar pro Datei hat das nicht zuverlässig behoben. Lösung: ein minimaler manueller `localStorage`-Ersatz direkt in den betroffenen Spec-Dateien (`auth.service.spec.ts`, `auth-guard.spec.ts`, `role-guard.spec.ts`).

Zusätzlich zeigte sich, dass die `AuthService`-Instanz zwischen einzelnen Tests nicht zuverlässig automatisch zurückgesetzt wurde. Um Seiteneffekte zwischen Tests zu vermeiden, wird der Zustand in `beforeEach` jetzt explizit mit `authService.logout()` bereinigt, statt sich auf eine frische Instanz pro Test zu verlassen.

## Projekt starten

```bash
npm install
ng serve
```

Anschließend `http://localhost:4200` im Browser öffnen.

## Architektur / Struktur

src/app/

├── core/

│ ├── auth/

│ │ ├── auth.service.ts — Signal-basierter Mock-Login, localStorage-Persistenz

│ │ ├── auth.guard.ts — schützt vor nicht eingeloggten Nutzern

│ │ ├── role.guard.ts — schützt rollenbasierte Routen (z. B. Einstellungen)

│ │ └── login/ — Login-Seite (Reactive Form)

│ ├── layout/

│ │ ├── header/

│ │ ├── sidebar/ — Navigation, nach Rolle gefiltert

│ │ └── shell/ — Layout-Rahmen für den geschützten Bereich

│ └── models/

│ └── user.model.ts

├── features/

│ ├── dashboard/ — KPI-Übersicht

│ ├── orders/ — Auftragsliste mit Status-Badges

│ ├── settings/ — Einstellungen (Mockup-Toggles)

│ └── profile/ — Profilanzeige (read-only)

├── shared/

│ └── ui/

│ ├── kpi-card/ — wiederverwendbare KPI-Karte

│ └── status-badge/ — wiederverwendbare, generische Status-Badge

├── app.routes.ts

└── app.config.ts

`core/` enthält Infrastruktur, die genau einmal existiert und die App zusammenhält (Auth, Layout-Rahmen). `features/` enthält die eigentlichen Seiten, jeweils lazy-loaded. `shared/ui/` enthält ausschließlich zustandslose, wiederverwendbare Bausteine ohne Fachwissen über die Domäne.

## Umgesetzte Features

**Pflicht:**

- Login mit Reactive Form, Validierung und sichtbaren Fehlermeldungen
- Mock-Authentifizierung, geschützter Bereich per Route Guard abgesichert
- Logout
- Hauptlayout mit Header, Navigation und Inhaltsbereich
- 4 Seiten: Dashboard, Aufträge, Einstellungen, Profil
- Komponentenbasierter Aufbau, sauberes TypeScript, getrennte Darstellung/Logik

**Bonus:**

- Login-Persistenz über `localStorage`
- Responsives Layout (Sidenav wechselt auf Mobile zu Overlay mit Hamburger-Menü)
- Angular Material (Form Field, Toolbar, Sidenav, Table, Slide-Toggle, Button-Toggle u. a.) kombiniert mit eigenem SCSS für Theming und domain-spezifische Komponenten
- Standalone Components durchgehend
- Lazy Loading für den gesamten geschützten Bereich
- Saubere Fehler- und Statusanzeigen
- Mock-Rollenlogik: zwei Rollen (Manager/Employee) mit unterschiedlichen Menüpunkten und einer geschützten Route
- ARIA-Accessibility: `role="alert"` bei Login-Fehlern, `aria-current` auf aktivem Nav-Link, `aria-label` auf Icon-Buttons, Landmark-Rollen
- Unit Tests für `AuthService`, `authGuard` und `roleGuard`

## Getroffene Annahmen

- Kein echtes Backend — Login läuft über fest hinterlegte Mock-Zugangsdaten (siehe oben)
- Statt eines generischen Benutzerprofils wurde eine Aufträge-Seite umgesetzt, da diese fachlich besser zum ERP-Kontext für Logistik passt. Die Aufgabenstellung erlaubt explizit alternative Seiten, sofern sinnvoll umgesetzt
- Profil wurde trotzdem als reine Anzeige ergänzt, aber bewusst nicht in die Hauptnavigation gepackt, sondern über den Benutzernamen im Header verlinkt — Profil ist konzeptionell kein Arbeitsbereich wie Dashboard/Aufträge/Einstellungen
- Login-Formular nutzt klassische Reactive Forms (FormGroup/FormControl) statt Signal Forms, da Reactive Forms in der Aufgabenstellung explizit als zu zeigendes Konzept genannt werden
- Zwei Mock-Rollen (Manager, Employee) statt nur einer, damit die Rollenlogik überhaupt sinnvoll demonstrierbar ist
- Mock-Daten (Aufträge, KPI-Zahlen) sind statisch im jeweiligen Service hinterlegt, keine echte HTTP-Anbindung

## Offene Punkte

- Die Aufträge-Tabelle ist auf sehr schmalen Screens horizontal scrollbar statt in eine Card-Ansicht umzubrechen — in einer echten Anwendung würde man auf Mobile eher eine andere Darstellung als eine Tabelle wählen. Aus Zeitgründen bewusst nicht weiter optimiert
- Kein Dashboard-Chart und kein Filter auf der Aufträge-Seite (geplante Stretch-Goals, aber kein Pflichtpunkt)
- Kein funktionierender Dark Mode, nur als Mockup-Toggle in den Einstellungen, wie in der Aufgabenstellung vorgesehen
