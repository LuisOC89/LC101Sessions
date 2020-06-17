# Interview Questions  
1. What does **CSS** stand for?  
**C**ascading **S**tyling **S**heets

2. What are the different types of selectors in CSS?  
- element selector  
```html
<p> Paragraph element. Using the element selector will make all paragraph elements on the page have pink text. </p>
```
```css
p {
   color: pink;
}
```

- id selector  
```html
<p id="pinkParagraph">Paragraph element. Recommended only for one element.</p>`.
```
```css
#pinkParagraph {
   color: pink;
}
```  
In CSS, the id selector is preceded by **#**.

- class selector (preceded by **.**)
```html
<p class="pink-paragraph">Paragraphs element with class "pink-paragraph". Recommended for several elements.</p>
```
```css
.pink-paragraph {
   color: pink;
}
```  

3. What is the precedence of CSS styling?  
Highest to lowest: Inline CSS > Internal CSS > External CSS  

4. How to assign same property to different items with different classes?  
```css
.centerAligned, .specialParagraph {
    text-align: center;
}

#cool-text, #blue-color{
    color: blue;
}
```

5. What is a branch in git?  
A **branch** is a separate version of the same code base. [Here](https://github.com/LuisOC89/hobby-pack/network)  

6. What is a MERGE in git?  
It is when the code in two branches are combined in the repository. [Here](https://github.com/LuisOC89/hobby-pack/network)  


