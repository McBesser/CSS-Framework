# CSS-Framework
Hi Guys,

This is my first version (if you can call it that) of my CSS framework and the first project I'm implementing with GitHub. I am from Germany and not so fit in English, so corrections are very welcome. Of course, suggestions, bug reports, etc. I hope you find the framework as useful as me. I was inspired by Bootstrap and created a framework on this basis that better meets my needs.
## Insert in the HTML Head 
An example to insert the CSS framework in the HTML head:

```
<link rel="stylesheet" media="all" href="/css/preset/preset.css" />

<link rel="stylesheet" media="all" href="/css/container/container.css" />
<link rel="stylesheet" media="(min-width: 0px)" href="/css/container/container-meta-bp-0.css" />
<link rel="stylesheet" media="(min-width: 576px)" href="/css/container/container-meta-bp-576.css" />
<link rel="stylesheet" media="(min-width: 768px)" href="/css/container/container-meta-bp-768.css" />
<link rel="stylesheet" media="(min-width: 992px)" href="/css/container/container-meta-bp-992.css" />
<link rel="stylesheet" media="(min-width: 1200px)" href="/css/container/container-meta-bp-1200.css" />

<link rel="stylesheet" media="all" href="/css/spacing/spacing.css" />
<link rel="stylesheet" media="(min-width: 0px)" href="/css/spacing/spacing-meta-bp-0.css" />
<link rel="stylesheet" media="(min-width: 576px)" href="/css/spacing/spacing-meta-bp-576.css" />
<link rel="stylesheet" media="(min-width: 768px)" href="/css/spacing/spacing-meta-bp-768.css" />
<link rel="stylesheet" media="(min-width: 992px)" href="/css/spacing/spacing-meta-bp-992.css" />
<link rel="stylesheet" media="(min-width: 1200px)" href="/css/spacing/spacing-meta-bp-1200.css" />

<link rel="stylesheet" media="all" href="/css/flex/flex.css" />
<link rel="stylesheet" media="(min-width: 0px)" href="/css/flex/flex-meta-bp-0.css" />
<link rel="stylesheet" media="(min-width: 576px)" href="/css/flex/flex-meta-bp-576.css" />
<link rel="stylesheet" media="(min-width: 768px)" href="/css/flex/flex-meta-bp-768.css" />
<link rel="stylesheet" media="(min-width: 992px)" href="/css/flex/flex-meta-bp-992.css" />
<link rel="stylesheet" media="(min-width: 1200px)" href="/css/flex/flex-meta-bp-1200.css" />

<link rel="stylesheet" media="all" href="/css/grid/grid.css" />
<link rel="stylesheet" media="(min-width: 0px)" href="/css/grid/grid-meta-bp-0.css" />
<link rel="stylesheet" media="(min-width: 576px)" href="/css/grid/grid-meta-bp-576.css" />
<link rel="stylesheet" media="(min-width: 768px)" href="/css/grid/grid-meta-bp-768.css" />
<link rel="stylesheet" media="(min-width: 992px)" href="/css/grid/grid-meta-bp-992.css" />
<link rel="stylesheet" media="(min-width: 1200px)" href="/css/grid/grid-meta-bp-1200.css" />

<link rel="stylesheet" media="all" href="/css/position/position.css" />
<link rel="stylesheet" media="(min-width: 0px)" href="/css/position/position-meta-bp-0.css" />
<link rel="stylesheet" media="(min-width: 576px)" href="/css/position/position-meta-bp-576.css" />
<link rel="stylesheet" media="(min-width: 768px)" href="/css/position/position-meta-bp-768.css" />
<link rel="stylesheet" media="(min-width: 992px)" href="/css/position/position-meta-bp-992.css" />
<link rel="stylesheet" media="(min-width: 1200px)" href="/css/position/position-meta-bp-1200.css" />

<link rel="stylesheet" media="all" href="/css/text/text.css" />
<link rel="stylesheet" media="(min-width: 0px)" href="/css/text/text-meta-bp-0.css" />
<link rel="stylesheet" media="(min-width: 576px)" href="/css/text/text-meta-bp-576.css" />
<link rel="stylesheet" media="(min-width: 768px)" href="/css/text/text-meta-bp-768.css" />
<link rel="stylesheet" media="(min-width: 992px)" href="/css/text/text-meta-bp-992.css" />
<link rel="stylesheet" media="(min-width: 1200px)" href="/css/text/text-meta-bp-1200.css" />

<link rel="stylesheet" media="all" href="/css/border/border.css" />
<link rel="stylesheet" media="(min-width: 0px)" href="/css/border/border-meta-bp-0.css" />
<link rel="stylesheet" media="(min-width: 576px)" href="/css/border/border-meta-bp-576.css" />
<link rel="stylesheet" media="(min-width: 768px)" href="/css/border/border-meta-bp-768.css" />
<link rel="stylesheet" media="(min-width: 992px)" href="/css/border/border-meta-bp-992.css" />
<link rel="stylesheet" media="(min-width: 1200px)" href="/css/border/border-meta-bp-1200.css" />
```

## File Schema
file name (folder name)
```*name*.css```
file for insert with media attribute
```*-meta-*.css```
file contains breakpoint
```
*bp-0*.css
*bp-576*.css
*bp-768*.css
*bp-992*.css
*bp-1200*.css
```

## CSS Schema
first part always name / short-name or breakpoint with name / short-name
eg.
```
.container
.bp-576-container
```

**legend:**
- d = display
- bp = breakpoint
- br = border
- m = margin
- mx = margin horizontal (left and right)
- my = margin vertical (top and bottom)
- p = padding (eg. spacing padding) or percent (eg. border-radius)
- px = padding horizontal (left and right)
- py = padding vertical (top and bottom)
- ...

