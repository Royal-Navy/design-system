
# CSS-Framework

@roaylnavy/css-framework is the foundational CSS Framework that all NELSON applications are built on.

---

# Context

Environment is a huge factor in deciding how we display NELSON applications, therefore it is important to provide the correct context for your app.

By default, the Context provided is `light`. The full list of available contexts are listed below:
```
- Light
- Dark [UNAVAILABLE]
- Ship Ops [UNAVAILABLE]
- Touch Device [UNAVAILABLE]
```

### Retrieving values from a Context

To retrieve a colour from the context map, a `color()` function is provided.
```
color( [NAMESPACE] , [SHADE] , [STATE?] )
// Examples
color("neutral", "000")
color("action", "100")
```

[NAMESPACE] - This namespace provides a way to group colours. 
[SHADE] - Shades exist between `000` and `900`. The default theme provides a different shade for every multiple of `100`.


### Extending a Context

To add or change any colour values provided by a Context, use the `$theme-extend: ()` map. Any values added here will be merged with the current theme, allowing you to access these new values in your application.

An example of this may be:

```
$theme-extend: (
  "neutral": (
    "000": #FF0000
  ),
  data: (...)
);
```

In the example above, we are updating the `neutral-000` value to `#FF0000` (red) and adding a new type, `data`, with its own colour values.

---

# Utility classes

Several different Utility classes are provided by this framework. This is to ensure consistency when building applications, and to hopefully mitigate any UI bugs that could occur by leaking styles.

## z-index

To ensure correct z-axis stacking in NELSON applications, a z-index Utility class is provided.

z-index can be set via a mixin named z-index:
```
@include z-index( [GROUP] )
```

The provided z index groups are as follows, in order of highest to lowest level:
```
- modal
- overlay
- dropdown
- header
- footer
- body
```

Occasionally, a group alone won't be enough to ensure a correct z-axis stack. An optional modifier value can be added to the z-index mixin, which will be added to the groups z-index. This optional modifier has a range of `1 - 999`. Anything exceeding this will be ignored, and the base z-index for the group will be returned.

```
.foo {
  @include z-index("modal", 132);
}

// returns
.foo {
  z-index: 7132;
}
```

## Spacing
[ WIP ]

## Breakpoints

NELSON applications are built Mobile First. A number of breakpoints are provided by default, and also tie into the Spacing Utility classes & variables:
```
- root: 0px
- xs: 576px
- s: 768px
- m: 1024px
- l: 1200px
- xl: 1400px
- xxl: 1600px
```
To use these breakpoints in a media query:
```
@include breakpoint("s") {
  .foo {
    color: red;
  }
}

// Result
@media only screen and (min-width: 768px) {
  .foo {
    color: red;
  }
}
```
