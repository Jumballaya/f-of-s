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
<span class="normal">Normal</span>
<span class="i">Italic</span>
<span class="thin">Thin</span>
<span class="underline">Underline</span>
<a class="text-decoration-none">No Underline</a>
```

Misc Properties
```html
<p class="line-height-3">This paragraph has a slightly larger line height than normal</p>
<p class="letter-spacing-2">This paragraph has a slightly larger letter spacing than normal</p>
<p class="font-kerning-none">This removes kerning from the font file</p>
<p class="break-word hyphens">Word Break with hyphens</p>
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

Font Color (see the colors section for details)
```html
<p class="color-{color}">This text is the color {color}</p>
<p class="color-text">This is the default body copy color</p>
<a class="color-primary hover-color-primary--dark">Link with a hover color change</a>
```

List Reset
```html
<ul class="list-reset">
  <li>No Bullets</li>
  <li>No Numbers on ol</li>
  <li>No padding</li>
</ul>
```

Blockquote
```html
<blockquote class="block col-12 py3 m0 font-size-4">
  This is a block quote full width
</blockquote>
```

Paragraph with indent
```html
<p class="font-size-3 color-text indent-2">This is a paragraph with a text indent...</p>
```


