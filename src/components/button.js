import React, { useState } from "react";
import "./button.css";
//rfce function component kısayol

//button ise class olmuş oluyor

function Button({ text, className, clicked }) {
  // bu da ctor a denk gelir.
  const [counter, setcounter] = useState(0); // initial değer yani başlangıç dğeri (counter değişken ismi)

  //setcounter counter değerini her seferinde değiştirmwmizi sağlar
  //butona basınca counter değerini değiştireceğiz
  //use state react dki en önemli hooklardan biridir. hook companente bir davranış kazandırmamızı sağlayan yapılardır.
  // component içerisinde bir değerin component ile etkileşimi sonucunda değişmesini istersek kullanabiliriz.

  // NOT: componentler dışarıdan değeri props ile alır. component içerisinde bir değer değiştirmek istiyorsak bu durumda state kavramını kullanmamaız gerekiyor. stateleri field gibi düşünebilirsin propsları ise property gibi düşünebilirsin c# da. functionları ise metod gibi düşün.

  const click = () => {
    //window.alert("clicked");
    //clicked ise tetiklenen event olarak karşımıza gelir.
    //event gibi düşün butona tıklayınca yapıyor
    clicked(`${text} butona tıklandı`);
    setcounter(counter + 1);
  };
  //companante event bağlama yöntemi

  return (
    <div>
      <p>tıklanma sayisi : {counter}</p>
      <button onClick={click} className={className}>
        {text}
      </button>
    </div>
  );
}

export default Button;
