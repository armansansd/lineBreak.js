## LineBreak.js

LineBreak is a small javascript/jquery script that moves small words at the end of a line, down a line, for a better text layout and readability. It is not very optimised for websites and is more interesting for print.

#### How to :

1. add jquery and lineBreak to word folder
   ```html
   <script type="text/javascript" src="jquery.js"></script>
   <script type="text/javascript" src="lineBreak.js"></script>
   ```

2. in a javascript tag call the lineBreak function with your own parameter
    ```javascript
    var caracter = ['the','on','in','and','no'];
lineBreak(".class | #id | tag", caracter);
    ```
