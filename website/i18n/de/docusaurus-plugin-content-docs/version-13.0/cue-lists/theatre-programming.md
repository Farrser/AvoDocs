---
id: theatre-programming
title: Theatre Programming Quick Guide
sidebar_label: Theatre Programming
original_id: theatre-programming
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Wenn Sie bereits mit anderen Theater-Lichtpulten gearbeitet haben, sind
Sie vermutlich eher an das Arbeiten mit Tasten, Nummern und Befehlen als
an Touchscreens wie bei Titan gewöhnt. Aber keine Angst: auch bei Titan
lässt sich eine Show mit Tasten, Nummern und Befehlen programmieren und
fahren.

'Richtige' Tasten mit Beschriftungen sind hier <Keys.HardKey>in spitzen Klammern</Keys.HardKey>
aufgeführt, wie z.B. <Keys.HardKey>Enter</Keys.HardKey>. Die <Keys.HardKey>Cue</Keys.HardKey>-Taste heißt auf manchen
älteren Pulten noch <Keys.HardKey>Connect</Keys.HardKey>. Die <Keys.HardKey>@</Keys.HardKey>-Taste ist die direkt bei den
Zifferntasten.

Dimmer und andere Geräte haben eine User Number (Benutzer-Nummer) (*entspricht  der Channel Number auf anderen Pulten*). Diese wird links oben
in der jeweiligen Schaltfläche angezeigt. In den hier aufgeführten
Befehlen wird die Nummer als <strong>"n"</strong> dargestellt. Die User Number lässt sich
über das Menü <Keys.SoftKey>Set Legend</Keys.SoftKey> ändern, siehe [Legende eingeben](../patching/changing-the-patch.md#legendenbezeichnungen-eingeben). Auch Gruppen
haben jeweils eine User Number.

![Fixtures Window showing user numbers](/docs/images/Fixtures-Window-showing-user-numbers.png)

## Dimmerwerte setzen

Tasten | Ergebnis
---- | ----
&nbsp;<strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Dimmer/Gerät <strong>n</strong> auf 100%
&nbsp;<strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <strong>v</strong> <Keys.HardKey>Enter</Keys.HardKey> | Dimmer/Gerät <strong>n</strong> auf <strong>v%</strong> *(v ist 2-stellig    einzugeben, also z.B. "50" für 50%)*
&nbsp;<strong>n</strong> <Keys.HardKey>Thro</Keys.HardKey> <strong>m</strong> <Keys.HardKey>@</Keys.HardKey> <strong>v</strong> <Keys.HardKey>Enter</Keys.HardKey> | Dimmer/Geräte <strong>n</strong> bis <strong>m</strong> auf <strong>v%</strong>
&nbsp;<strong>n</strong> <Keys.HardKey>And</Keys.HardKey> <strong>m</strong> <Keys.HardKey>And</Keys.HardKey> <strong>p</strong> <Keys.HardKey>@</Keys.HardKey> <strong>v</strong> <Keys.HardKey>Enter</Keys.HardKey> | Dimmer/Geräte <strong>n</strong>, <strong>m</strong>, <strong>p</strong> auf <strong>v%</strong>
<Keys.HardKey>Group</Keys.HardKey> <strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <strong>v</strong> <Keys.HardKey>Enter</Keys.HardKey> | Dimmer/Geräte in Gruppe <strong>n</strong> auf <strong>v%</strong>
<Keys.HardKey>Clear</Keys.HardKey> | Sofortiges Release der editierten Kanäle auf den programmierten Status (*wie Cheat auf ETC-Pulten*)
&nbsp;<strong>t</strong> <Keys.HardKey>Clear</Keys.HardKey> | Release der editierten Kanäle in <strong>t</strong> Sekunden


## Andere Parameter bei Movinglights etc. einstellen

-   Die Geräte können mit den Tasten wie folgt angewählt werden:

    Tasten | Ergebnis
    ---- | ----
    <strong>n</strong> <Keys.HardKey>Enter</Keys.HardKey> | Gerät <strong>n</strong>
    <strong>n</strong> <Keys.HardKey>Thro</Keys.HardKey> <strong>m</strong> <Keys.HardKey>Enter</Keys.HardKey> | Geräte <strong>n</strong> bis <strong>m</strong>
    <Keys.HardKey>Group</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Enter</Keys.HardKey> | Geräte der Gruppe <strong>n</strong>


-   Wählen Sie nun die  gewünschte Attributbank, z.B. <Keys.HardKey>Colour</Keys.HardKey>, <Keys.HardKey>Gobo</Keys.HardKey> etc.
    Die jeweilige Funktion der Wheels wird unten rechts im Bildschirm
    angezeigt. Gibt es mehrere Parameter pro Attributbank, z.B. Gobo1,
    Gobo2, jeweils mit Rotation etc., dann kann man mit wiederholtem
    Drücken der Attributbank-Taste durchschalten (hier also mehrfach auf
    <Keys.HardKey>Gobo</Keys.HardKey>).

-   Mit den Encoderrädern stellen Sie die gewünschten Werte ein. Alternativ drückt
    man die blaue <Keys.HardKey>@</Keys.HardKey>-Taste bei einem Wheel und kann den Wert mit den
    Zifferntasten eingeben.

## Programmieren von Cues

Titan kann mehrere Cuelisten parallel laufen lassen. Zum Programmieren
einer Cueliste drückt man auf <Keys.HardKey>Record</Keys.HardKey> und wählt im Menü \[Create Cue
List\]. Dann drückt man die <strong>blaue Taste</strong> bei einem Fader, um dort die
Cueliste zu speichern.

Titan speichert normalerweise nur die Dimmer/Geräte, die seit dem
letzten Betätigen von <Keys.HardKey>Clear</Keys.HardKey> geändert wurden, und nur, wenn sich
gegenüber dem vorigen Cue Änderungen ergeben. Sind dagegen andere
Playbacks aktiv, werden diese nicht mit in den Cue gespeichert. Will man
doch alles, also alle Dimmer/Geräte, die gerade über 0% sind, speichern,
so wechselt man den Speichermodus <Keys.SoftKey>Record Mode</Keys.SoftKey> auf "Record by Stage" (siehe [Erstellen eines Cues](../cues/creating-a-cue.md#anlegen-eines-cues)).

Tasten | Ergebnis
-------|---------
<Keys.HardKey>Record</Keys.HardKey> &#123;blaue Playbacktaste&#125; &#123;blaue Playbacktaste&#125; | speichert den nächsten Cue an das Ende dieser Cueliste
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Enter</Keys.HardKey> | Speichert Cue <strong>n</strong> (existiert bereits ein solcher Cue, erfolgt eine Rückfrage zum Mergen/Überschreiben)
<Keys.HardKey>Time</Keys.HardKey> <strong>t</strong> <Keys.HardKey>Enter</Keys.HardKey> | Setzen der Fadezeit im Programmer (wird in nachfolgend gespeicherte Cues übernommen; bereits angelegte Cues  bleiben unbeeinflusst)
<Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Time</Keys.HardKey> <strong>t</strong> <Keys.HardKey>Enter</Keys.HardKey> | Setzt Fadezeit für Cue <strong>n</strong> auf <strong>t</strong> Sekunden
<Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Löscht Cue <strong>n</strong> (2. <Keys.HardKey>Enter</Keys.HardKey> bestätigt)
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>m</strong> <Keys.HardKey>Enter</Keys.HardKey> | Kopieren von Cue <strong>n</strong> in neuen Cue <strong>m</strong>
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Kopieren von Cue <strong>n</strong> an das Ende der Cueliste

> Mit <Keys.HardKey>Move</Keys.HardKey> können Cues verschoben werden, mit <Keys.HardKey>Thro</Keys.HardKey> und <Keys.HardKey>And</Keys.HardKey>
lassen sich mehrere Cues auf einmal kopieren/verschieben.

---

Die Liste der Cues in einer Cueliste lässt sich auf dem Bildschirm
anzeigen, und man kann einzelne Zeiten und andere Dinge einstellen:\
    <Keys.HardKey>View</Keys.HardKey> <strong>&#123;blaue Playbacktaste&#125;</strong>

---

Zum Erstellen eines Block-Cues (Änderungen werden nicht getrackt) öffnet
man die Cueliste wie beschrieben, klickt in der Spalte 'Tracking' auf
die Zelle des entsprechenden Cues und wählt <Keys.SoftKey>Block</Keys.SoftKey> mit den
Menütasten.

---

Um Cues [miteinander zu verlinken](cue-list-timing.md#schrittfolge-und-versatz), klickt man auf die entsprechende Zelle
der Spalte ‚Link' (dort steht normalerweise ‚Wait For Go'). Dann kann
man mit den Menütasten auf <Keys.SoftKey>Link After Previous Cue</Keys.SoftKey> oder \[Link With
Previous Cue\]. Für 'Link After...' bestimmt dann der Wert für 'Delay
Out', wie lange nach dem vorigen der neue Cue automatisch startet.

## Cues und Cuelisten abfahren

Schiebt man den Fader einer Cueliste hoch, so wird sie mit der Steuerung
verbunden *("connected")*.

Weitere Möglichkeiten zur Steuerung (Auswahl):

Tasten | Ergebnis
-------|---------
<Keys.HardKey>Cue</Keys.HardKey> <strong>&#123;blaue Playbacktaste&#125;</strong> | Verbinden einer anderen Cueliste
<Keys.HardKey>Go</Keys.HardKey> | Nächster Cue wird mit den programmierten Zeiten eingeblendet
<Keys.HardKey>Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Go</Keys.HardKey> | Cue n wird mit den programmierten Zeiten eingeblendet
&nbsp;<strong>t</strong> <Keys.HardKey>Go</Keys.HardKey> | Nächster Cue wird in <strong>t</strong> Sekunden eingeblendet
&nbsp;<strong>n</strong> <Keys.HardKey>Cue</Keys.HardKey> <strong>t</strong> <Keys.HardKey>Go</Keys.HardKey> | Cue <strong>n</strong> wird in <strong>t</strong> Sekunden eingeblendet

> Sollen Movinglights bereits im Off auf Position, in Gobo oder Farbe
fahren, aktivieren Sie die Funktion <Keys.SoftKey>Move In Dark</Keys.SoftKey> (siehe voriger
Abschnitt).

## Cues live editieren

Oft müssen Änderugnen an bereits programmierten Cues vorgenommen werden,
während diese gerade live sind. Es empfiehlt sich, <Keys.HardKey>Clear</Keys.HardKey> zu drücken,
um nicht versehentlich unerwünschte Werte mit zu speichern.

-   <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> : Speichern der aktuell eingestellten
    Werte in den aktuellen Cue

-   <Keys.HardKey>Time</Keys.HardKey> <strong>t</strong> <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> : Speichern der
    Fadezeit <strong>t</strong> in den aktuellen Cue

> Eine andere Möglichkeit ist, die Cueliste mit <Keys.HardKey>View</Keys.HardKey> zu öffnen
    und dort die Änderungen vorzunehmen.


## Shapes und Effekte

You can't select Effects/Shapes from the keypad on Titan, but it's still
easy:

1.   Zu steuernde Geräte wählen

2.   Im Hauptmenü drückt man <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, <Keys.SoftKey>Shape Generator</Keys.SoftKey>,
    <Keys.SoftKey>Create</Keys.SoftKey>

3.   Den gewünschten Shape-Typ wählen, z.B. <Keys.SoftKey>Dimmer</Keys.SoftKey>, <Keys.SoftKey>Pan/Tilt</Keys.SoftKey> etc.

4.   Den gewünschten Shape wählen (Menütasten oder Shapes-Fenster)

5.   Speed, Size, Spread mit den Wheels einstellen

Shapes können ganz normal in Cues gespeichert werden und tracken in
folgende Cues. Das Shape-Tracking lässt sich In der Playbacks-Ansicht sowie
in den Playback-Optionen getrennt deaktivieren.