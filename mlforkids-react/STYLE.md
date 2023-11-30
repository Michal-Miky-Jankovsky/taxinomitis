Style Guide
===========
This is a style guide for the ML for Kids React app.

In implementation side of view, how to write the "tsx" (html) code.

Setup
-----

### Color Constants
`mlforkids-react/tailwind.config.js`

```javascript
module.exports = {
  ...
  theme: {
    extend: {
      colors: {
        'text-primary': '#000006',
        'brand-cyan': '#74C4BC',
        'brand-blue': '#22619B',
        ...
```

### Minimal Common CSS
`mlforkids-react/src/index.css`

```css
h1 {
    @apply text-4xl font-bold py-6;
} 

p {
    @apply py-2;
}

a {
    @apply underline;
}

.cols-3-fixed {
    @apply md:grid md:grid-cols-3 md:gap-4;
}

...
```
Tailwind CSS should have all the styles defined locally in `tsx` files or react components. 

This is just minimum common css. Try not to bloat this file.

Sections
--------
Is a component to display a section of the page.
Is responsive to the width of the screen.
On a mobile device single column, on a desktop device more columns.

Column layout classes:
 * `cols-2-fixed` - two columns, fixed half width
 * `cols-3-fixed` - three columns, fixed third width
 * `cols-4-fixed` - four columns, fixed quarter width
 * `cols-2-even` - two columns, split evenly

Color classes:
 * `bg-brand-orange` - orange background
 * `bg-brand-cyan` - cyan background
 * `text-white` - especially for h1, h2

Alignment classes:
 * `text-center` - centered text

Components
----------
 * `<Section/>` - a section of the page
     * common padding
     * center max width on big screens
     * props: 
         * `children` - _React.ReactNode_
 * `<SafeHtmlParagraph/>` - a paragraph of text
     * safe html parsed from localization file
     * props:
         * `children` - _string | Node_
 * `<SafeHtmlSpan/>` - a span of text
     * safe html parsed from localization file
     * props:
         * `children` - _string | Node_
 * `<RedButton/>` - a common red pill button `<a/>`
     * external link (different domain)
     * props: 
         * `children` - _React.ReactNode | string_
         * `href` - _string_ - external link
         * `newTab` - _boolean_ - whether to open in new tab
         * `marginTop` - _boolean_ - whether to add common margin top
 * `<RedLink/>` - A common red pill button `<Link/>`
     * internal router link 
     * props: 
         * `children` - _React.ReactNode | string_
         * `to` - _string_ - router link
         * `newTab` - _boolean_ - whether to open in new tab
         * `marginTop` - _boolean_ - whether to add common margin top
