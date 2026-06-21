# Angular Home Challenge – Junior / Mid Developer

## Ziel der Aufgabe

Im Rahmen dieser Aufgabe sollst du eine kleine Angular-Anwendung entwickeln.
Die Aufgabe ist so ausgelegt, dass sie in etwa **einem Arbeitstag** bearbeitet werden kann.

---

## Rahmenbedingungen

- **Geschätzter Aufwand:** ca. 1 Arbeitstag
- **Ort:** Zuhause
- **Hilfsmittel:**
  - Alles erlaubt

---

## Aufgabenstellung

Erstelle eine kleine Angular-Webanwendung mit Login und geschütztem Bereich.

Die Anwendung soll nach erfolgreichem Login einen internen Bereich anzeigen, in dem über ein Menü zwischen mehreren Seiten navigiert werden kann.

---

## Funktionale Anforderungen

### 1. Login-Seite

Erstelle eine Login-Seite mit einem Formular.

Das Formular soll mindestens folgende Felder enthalten:
- Benutzername oder E-Mail
- Passwort

#### Anforderungen:
- Beide Felder sind Pflichtfelder
- Es sollen sinnvolle Validierungen eingebaut werden
- Fehlermeldungen sollen sichtbar angezeigt werden

Ein echtes Backend ist **nicht erforderlich**.
Der Login kann mit fest definierten Zugangsdaten oder einer simulierten Authentifizierung umgesetzt werden.

Beispiel:
- Benutzername: `admin`
- Passwort: `admin123`

---

### 2. Authentifizierung

Nach erfolgreichem Login soll der Benutzer in einen geschützten Bereich weitergeleitet werden.

#### Anforderungen:
- Nicht eingeloggte Benutzer dürfen den geschützten Bereich nicht direkt aufrufen
- Geschützte Routen sollen entsprechend abgesichert sein
- Es soll möglich sein, sich wieder auszuloggen

---

### 3. Hauptlayout nach Login

Nach dem Login soll ein Hauptlayout angezeigt werden, das mindestens aus folgenden Bereichen besteht:

- Header oder Topbar
- Navigationsmenü
- Inhaltsbereich

Über das Menü sollen verschiedene Seiten auswählbar sein.

---

### 4. Menü / Navigation

Es soll ein Menü geben, über das mindestens **3 verschiedene Seiten** erreichbar sind.

Beispielseiten:
- Dashboard
- Benutzerprofil
- Einstellungen

Andere Seiten sind ebenfalls möglich, solange sie sinnvoll umgesetzt sind.

---

### 5. Beispielseiten

Die Seiten sollen nicht nur leer sein, sondern einfache Inhalte oder kleine Funktionen enthalten.

#### Mögliche Anforderungen pro Seite:

**Dashboard**
- Begrüßung des eingeloggten Benutzers
- Anzeige einiger statischer Informationen oder kleiner Karten

**Profil**
- Anzeige von Benutzerdaten
- optional: Formular zur Bearbeitung einfacher Profildaten

**Einstellungen**
- einfache Optionen als Formular oder Umschalter
- z. B. Sprache, Benachrichtigungen, Dark Mode als Mockup

---

## Technische Anforderungen

Die Lösung sollte folgende Angular-Konzepte sauber zeigen:

- Komponentenbasierter Aufbau
- Routing
- Route Guards oder vergleichbare Absicherung
- Services
- Reactive Forms
- Datenbindung
- Saubere TypeScript-Typisierung
- Sinnvolle Projektstruktur
- Trennung von Darstellung und Logik

---

## Erwartete Umsetzung

Es wird keine perfekt fertige Business-Anwendung erwartet.
Wichtig ist, dass die Lösung nachvollziehbar, sauber strukturiert und technisch sinnvoll aufgebaut ist.

---

## Bonus (optional)

Folgende Punkte bringen zusätzliche Pluspunkte:

- Persistenz des Login-Status im `localStorage`
- Responsive Layout
- Verwendung von Angular Material
- Standalone Components
- Unit Tests für Services oder Komponenten
- Lazy Loading für geschützte Bereiche
- Saubere Fehler- und Statusanzeigen
- Mock einer Rollenlogik, z. B. unterschiedliche Menüpunkte je Benutzerrolle

---

## Abgabe

Bitte stelle uns zur Verfügung:

- den vollständigen Quellcode
- eine kurze `README.md`, die enthält:
  - Anleitung zum Starten des Projekts
  - kurze Beschreibung der Architektur / Struktur
  - getroffene Annahmen
  - umgesetzte Features
  - ggf. offene Punkte

**Optional:**
- Link zu einem Git-Repository

---

## Hinweis

Uns ist wichtig zu verstehen, **wie du arbeitest und wie du Angular einsetzt**.
Die Aufgabe muss nicht perfekt sein. Wichtiger ist eine saubere, nachvollziehbare und gut begründbare Lösung.

Im Anschluss werden wir die Lösung gemeinsam besprechen.

---

Viel Erfolg!