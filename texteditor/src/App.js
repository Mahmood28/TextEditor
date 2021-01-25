import { useState } from "react";
import { Page, Button, Text, Color } from "./styles";

function App() {
  const [colour, setColour] = useState("");
  const [style, setStyle] = useState("");
  const [deco, setDeco] = useState("normal");
  const [weight, setWeight] = useState("");
  const toggleColour = (color) => setColour(colour === color ? "black" : color);
  const toggleWeight = () => setWeight(weight === "bold" ? "normal" : "bold");
  const toggleStyle = () => setStyle(style === "italic" ? "normal" : "italic");
  const toggleDeco = () => setDeco(deco === "underline" ? "none" : "underline");

  const font = {
    color: colour,
    fontStyle: style,
    fontWeight: weight,
    textDecoration: deco,
  };

  return (
    <Page>
      <Button onClick={toggleWeight}>Bold</Button>
      <Button onClick={toggleStyle}>italic</Button>
      <Button onClick={toggleDeco}>underline</Button>
      <Text style={font} />
      <br></br>
      <Color onClick={() => toggleColour("blue")} className="blue" />
      <Color onClick={() => toggleColour("red")} className="red" />
      <Color onClick={() => toggleColour("yellow")} className="yellow" />
      <Color onClick={() => toggleColour("green")} className="green" />
      <Color onClick={() => toggleColour("pink")} className="pink" />
    </Page>
  );
}

export default App;
