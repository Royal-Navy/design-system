---
title: Colour
description: Using colour within NELSON applications
audience: public
pageClasses: ''
context: 'Design'
template: withsidebar
---

A consistent and well named colour system provides a strong basis for all NELSON applications. We have provided several base colours and modifier shades that allow you to design and build a variety of user interfaces (UIs) whilst maintaining consistency across the platform.

## Default Colour Palette

Out of the box, NELSON provides 5 base colours. We use functional names for colours, rather than their literal colour names (e.g. `red` or `blue`). This allows us to provide multiple different colour schemes for a variety of scenarios, whilst keeping them semantically correct.

#### Neutral

Neutral shades provide the base of NELSON applications. They should be used to build UIs, and mostly serve as background, text colour, and border shades for components. The majority of colours for an application will be from the Neutral Palette.

<Swatch property="background-color" value="#091826" label="Black"></Swatch>
<Swatch property="background-color" value="#102a43" label="900"></Swatch>
<Swatch property="background-color" value="#253b53" label="800"></Swatch>
<Swatch property="background-color" value="#324e68" label="700"></Swatch>
<Swatch property="background-color" value="#496582" label="600"></Swatch>
<Swatch property="background-color" value="#627d98" label="500"></Swatch>
<Swatch property="background-color" value="#829ab1" label="400"></Swatch>
<Swatch property="background-color" value="#9eb3c8" label="300"></Swatch>
<Swatch property="background-color" value="#bcccdc" label="200"></Swatch>
<Swatch property="background-color" value="#dae2ec" label="100"></Swatch>
<Swatch property="background-color" value="#f0f4f8" label="000"></Swatch>
<Swatch property="background-color" value="#f7f9fb" label="00"></Swatch>
<Swatch property="background-color" value="#FFFFFF" label="white"></Swatch>

#### Primary

The Primary shades are mostly used to indicate the main action of a component. By default, use the Primary shades instead of the named state colours (Success, Warning, or Danger) for the majority of actions.

Another use case for the Primary palette is for components that need to stand out from the neutral background palette. Styling an Alert component with the Primary palette will get the user's attention, however will not have any of the associated connotations that Success/Warning/Danger has.

<Swatch property="background-color" value="#012159" label="900"></Swatch>
<Swatch property="background-color" value="#01337d" label="800"></Swatch>
<Swatch property="background-color" value="#03449e" label="700"></Swatch>
<Swatch property="background-color" value="#0552b5" label="600"></Swatch>
<Swatch property="background-color" value="#0a67d2" label="500"></Swatch>
<Swatch property="background-color" value="#2286eb" label="400"></Swatch>
<Swatch property="background-color" value="#48a3f3" label="300"></Swatch>
<Swatch property="background-color" value="#7cc4fa" label="200"></Swatch>
<Swatch property="background-color" value="#bbe3ff" label="100"></Swatch>
<Swatch property="background-color" value="#e6f6ff" label="100"></Swatch>

### State Colours

State colours are used to improve the semantics of particular Actions. These palettes should be used sparingly, as they capture the user's attention.

#### Success

<Swatch property="background-color" value="#10531e" label="900"></Swatch>
<Swatch property="background-color" value="#196929" label="800"></Swatch>
<Swatch property="background-color" value="#329c48" label="700"></Swatch>
<Swatch property="background-color" value="#3daf41" label="600"></Swatch>
<Swatch property="background-color" value="#54c758" label="500"></Swatch>
<Swatch property="background-color" value="#7ade72" label="400"></Swatch>
<Swatch property="background-color" value="#9ff290" label="300"></Swatch>
<Swatch property="background-color" value="#c6fcb0" label="200"></Swatch>
<Swatch property="background-color" value="#e1ffce" label="100"></Swatch>
<Swatch property="background-color" value="#f3ffeb" label="000"></Swatch>

#### Warning

<Swatch property="background-color" value="#6b3012" label="900"></Swatch>
<Swatch property="background-color" value="#81491e" label="800"></Swatch>
<Swatch property="background-color" value="#a46926" label="700"></Swatch>
<Swatch property="background-color" value="#ce892d" label="600"></Swatch>
<Swatch property="background-color" value="#f2b449" label="500"></Swatch>
<Swatch property="background-color" value="#edcb29" label="400"></Swatch>
<Swatch property="background-color" value="#f5e473" label="300"></Swatch>
<Swatch property="background-color" value="#fcf4ac" label="200"></Swatch>
<Swatch property="background-color" value="#fffbdb" label="100"></Swatch>
<Swatch property="background-color" value="#fffef4" label="000"></Swatch>

### Danger

<Swatch property="background-color" value="#610315" label="900"></Swatch>
<Swatch property="background-color" value="#8a041a" label="800"></Swatch>
<Swatch property="background-color" value="#ab091f" label="700"></Swatch>
<Swatch property="background-color" value="#d01224" label="600"></Swatch>
<Swatch property="background-color" value="#e12d38" label="500"></Swatch>
<Swatch property="background-color" value="#ef4e4d" label="400"></Swatch>
<Swatch property="background-color" value="#f76b6a" label="300"></Swatch>
<Swatch property="background-color" value="#ff9b9a" label="200"></Swatch>
<Swatch property="background-color" value="#ffbdbd" label="100"></Swatch>
<Swatch property="background-color" value="#fef1f2" label="000"></Swatch>


## Using Colours

To reference colours and their shades, we have provided a `color()` function. This function takes two values, `color` and `shade`.

```
  color: color(neutral, 500);
  border: 1px solid color(danger, 300);

  // Result
  color: #627d98;
  border: 1px solid #f36968;
```
