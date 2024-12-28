import logo from "./logo.svg";
import "./App.css";
import MarkSheet from "./classes/MarkSheet";

function App() {
  let Sravya = new MarkSheet();
  Sravya.TeluguMarks = 99;
  Sravya.HindiMarks = 90;
  Sravya.EnglishMarks = 99;
  Sravya.MathsMarks = 88;
  Sravya.ScienceMarks = 99;
  Sravya.SocialMarks = 88;

  Sravya.calculateResult();

  console.log(MarkSheet.PassMarks);
  console.log(MarkSheet.aboutMarks());

  let TeluguHeroines = [
    "Kajal",
    "Samantha",
    "pooja",
    "Tamanna",
    "Krithi",
    "Rakul",
    "Srileela",
    "Rashmila",
    "Anushka",
    "trisha",
    "Faira",
  ];

  return (
    <div className="App">
      <h1>Static and Array Method-1</h1>
      <button
        type="button"
        onClick={() => {
          console.log(TeluguHeroines.length);
          for (let i = 0; i <= 9; i++) {
            console.log(TeluguHeroines[i]);
          }

          // console.log(TeluguHeroines[2]);
          // console.log(TeluguHeroines[4]);
        }}
      >
        1.Array Length
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(TeluguHeroines.at(5));
        }}
      >
        2.Array At
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(TeluguHeroines);
          console.log(TeluguHeroines.toString());
          console.log(TeluguHeroines.join("<....>"));
        }}
      >
        3.toString/join
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(TeluguHeroines);
          console.log(TeluguHeroines.push("TollyWood"));
        }}
      >
        4.Push
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(TeluguHeroines);
          console.log(TeluguHeroines.pop());
        }}
      >
        5.Pop
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(TeluguHeroines);
          console.log(TeluguHeroines.unshift("TopHeroines"));
        }}
      >
        6.UnShift
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(TeluguHeroines);
          console.log(TeluguHeroines.shift());
        }}
      >
        7.Shift
      </button>

      <button type="button" onClick={() => {
        console.log(TeluguHeroines);
        console.log(TeluguHeroines.splice(5,3));
        console.log(TeluguHeroines.splice(5,3,"Sravya"))
      }}>
        Splice
      </button>
    </div>
  );
}

export default App;
