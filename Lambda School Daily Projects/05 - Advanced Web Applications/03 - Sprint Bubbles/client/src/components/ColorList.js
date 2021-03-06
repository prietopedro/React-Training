import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [formValues,setFormValues] = useState({name:"" , color:""})

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth().put(`/api/colors/${colorToEdit.id}` , colorToEdit)
    .then(res=>{
      updateColors(colors.map(color=>{
      if(color.id === colorToEdit.id){
        return res.data
      }else{
        return color
      }
    }))
      setEditing(false)
  })
  .catch(err=>console.log(err))
  };

  const deleteColor = color => {
    axiosWithAuth().delete(`/api/colors/${color.id}`)
    .then(()=> updateColors(colors.filter(colorFilter=>colorFilter.id !== color.id)))
    .catch(err=>console.log(err))
  };

  const addColor = (e) => {
    e.preventDefault();
    axiosWithAuth().post("/api/colors",{color:formValues.name , code:{hex: formValues.color} })
    .then(res=>updateColors(res.data))
    .catch(err=>console.log(err))
    setFormValues({color: "" , name: ""})
  }

  const handleChange = (e) => {
    setFormValues({...formValues,[e.target.name] : e.target.value})
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      <form>
        <input type="text" name="name" placeholder="Color" onChange={handleChange} />
        <input type="text" name="color" placeholder="Hex Code, Please include The #" onChange={handleChange} />
        <button onClick={addColor}>ADD COLOR</button>
      </form>
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
