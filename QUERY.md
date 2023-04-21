```css
/* Cumprido */
@media not all and (max-height: 100vw){
  body{ background-color: greenyellow; }

  /* Muito cumprido */
  @media screen and (max-width:768px){
    body{ background-color: gold; }
  }
}

/* Largo */
@media not all and (max-width: 100vh){
  body{ background-color: deeppink; }

  /* Muito largo */
  @media screen and (min-width:1200px){
    body{ background-color: dodgerblue; }
  }
}

```