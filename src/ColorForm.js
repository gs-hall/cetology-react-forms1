import React, {useState} from "react";
import "./main.css";

export default function ColorForm() {
  const [form, setForm] = useState({
    color: '#ffffff',
  });

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setForm(prevForm => ({
      ...prevForm, [name]: value
    }));
  };

  const changeBackgroundColor = (hex) => {
    document.documentElement.style.background = '#'+hex;
  }

  const validHexColor = (hex) => {
    const validHex = new RegExp('^#([0-9a-f]{6})$','i');
    var match = validHex.exec(hex);
    return match ? match[1] : null;
  }

  const hex2rgb = (hex) => {
    if (!hex) {return 'Ошибка'};
    hex = '0x' + hex;
    let r = (hex >> 16) & 0xFF;
    let g = (hex >> 8) & 0xFF;
    let b = hex & 0xFF;
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Render
  const hex = validHexColor(form.color);
  if (hex) {
    changeBackgroundColor(hex);
  };

  return (
    <div className="color-form">
      <form className="color-form" onSubmit={(e) => {e.preventDefault()}}>
        <div>
          <input
            className="color-form"
            name="color"
            value={form.color}
            placeholder="#123456"
            onChange={handleFormChange}
            autoFocus
          />
        </div>
        <p className={"color-form"+(hex ? '':' error')}>{hex2rgb(hex)}</p>
      </form>
    </div>
  );
 //        <input className="color-form" name="rgb" value={rgb} readOnly />
}