Style Guide
===========
This is a style guide for the ML for Kids React app.

In implementation side of view, how to write the "tsx" (html) code.

Setup
-----

### Fonts
todo remove unnecessary variants
https://fonts.google.com/share?selection.family=Quicksand:wght@300;400;500;600;700|Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700

### Color Constants
`mlforkids-react/tailwind.config.js`

```text
module.exports = {
  ...
  theme: {
    extend: {
      colors: {
        "text-primary": "#000006",
        "brand-cyan": "#74C4BC",
        "brand-blue": "#22619B",
        ...
```

### Minimal Common CSS
`mlforkids-react/src/index.css`

```text
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
 * `<Paragraphs/>` - a dynamic list of paragraphs from translation file
     * list of paragraphs internally using `<SafeHtmlParagraph/>`  
     * props:
         * `children` - _string[]_

Templates
---------

section useful classes:
* `className={ "bg-brand-orange" }`
* `className={ "bg-brand-cyan" }`
* `className={ "text-center" }`
* `className={ "text-white" }`

header section:
````tsx
<Section className={ "bg-brand-orange" }>
    <h1 className={ "text-white" }>
        { t("headerSection.h1") }
    </h1>
    <div className={ "cols-2-fixed" }>
        <div>
            <SafeHtmlParagraph
                className={ "text-2xl" }>
                { t("headerSection.pLarge") }
            </SafeHtmlParagraph>
            <Paragraphs>
                { t("headerSection.paragraphs", { returnObjects: true }) }
            </Paragraphs>
            <RedButton newTab href="#">
                { t("headerSection.button") }
            </RedButton>
        </div>
        <div className={ "hidden md:block" }>
            todo svg
        </div>
    </div>
</Section>
```

simple section:
````tsx
<Section className={ "bg-brand-cyan" }>
    <h2 className={ "text-white" }>
        { t("section2.h2") }
    </h2>
    <Paragraphs>
        { t("section2.paragraphs", { returnObjects: true }) }
    </Paragraphs>
    <RedLink to="#">
        { t("section2.button") }
    </RedLink>
</Section>
```


2 columns fixed:
````tsx
<Section className={ "" }>
    <h2>
        { t("section2.h2") }
    </h2>
    <div className={ "cols-2-fixed" }>
        <div>
            todo svg
            <Paragraphs>
                { t("section2.col1.paragraphs", { returnObjects: true }) }
            </Paragraphs>
        </div>
        <div>
            todo svg
            <Paragraphs>
                { t("section2.col2.paragraphs", { returnObjects: true }) }
            </Paragraphs>
        </div>
    </div>
</Section>
```

 3 columns fixed:
````tsx
<Section className={ "" }>
    <h2>
        { t("section3.h2") }
    </h2>
    <div className={ "cols-3-fixed" }>
        <div>
            todo svg
            <Paragraphs>
                { t("section3.col1.paragraphs", { returnObjects: true }) }
            </Paragraphs>
        </div>
        <div>
            todo svg
            <Paragraphs>
                { t("section3.col2.paragraphs", { returnObjects: true }) }
            </Paragraphs>
        </div>
        <div>
            todo svg
            <Paragraphs>
                { t("section3.col3.paragraphs", { returnObjects: true }) }
            </Paragraphs>
        </div>
    </div>
</Section>
```

2 columns even:
````tsx
<Section className={ "" }>
    <h2>
        { t("section4.h2") }
    </h2>
    <div className={ "cols-2-even" }>
        <div>
            <Paragraphs>
                { t("section4.col1.paragraphs", { returnObjects: true }) }
            </Paragraphs>
        </div>
        <div>
            <Paragraphs>
                { t("section4.col2.paragraphs", { returnObjects: true }) }
            </Paragraphs>
        </div>
    </div>
</Section>
```
