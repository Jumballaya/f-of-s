##Typography

 1. Defaults
 2. Font Family
 3. Line Height
 4. Font Size

####Defaults

the `<html>` element will should have the font-size of `rem-base` while the body has the font-size of
`base-font-size`.

> Currently set at `10px` and `1.6rem` currently. This allows for easier font size math where 1rem = 10px.

####Font Family

#####Font family defaults
  1. Sans-serif stack: *sans-serif*
  2. Serif stack:  *serif*
  3. Header font families are defaulted to the sans-serif fonts
  4. Body copy font families are defaulted to the serif fonts


#####Examples

Header fonts h1 - h5
```html
<h1 class="h1">Hello World 1</h1>
<h2 class="h2">Hello World 2</h2>
<h3 class="h3">Hello World 3</h3>
<h4 class="h4">Hello World 4</h4>
<h5 class="h5">Hello World 5</h5>
```

Basic Font Properties
```html
<span class="b">Bold</span>
<span class="i">Italic</span>
<span class="underline">Underline</span>
<a class="text-decoration-none">No Underline</a>
```

Font Position
```html
<span class="left-align">Left Align</span>
<span class="center">Center</span>
<span class="right-align">Right Align</span>
```

Text Flow
```html
<p class="justify">Justify</p>
<span class="nowrap">No Wrap</span>
<p class="truncate">Truncate</p>
```

Character Case
```html
<span class="ucase">Upper Case</span>
<span class="lcase">Lower Case</span>
<span class="lead-caps">Lead Caps</span>
<span class="small-caps">Small Caps</span>
```
