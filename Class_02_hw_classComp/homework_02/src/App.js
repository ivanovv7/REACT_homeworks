import logo from './logo.svg';
import './App.css';
import Card from "../src/Exercise_1/exercise_01.jsx"
import "./Exercise_1/exercise_01.css"
import Academies from './Exercise_1.5/Exercise_1.5';
import { academies } from './Exercise_1.5/helper.jsx';
import Counter from './Exercise_2/Exercise_2';
function App() {
  return (


    <div>
      {/*  ***  EXERCISE_1 *** */}

      <header className="header_01">
        <h1>Exercise_1</h1>
        <h1>Memes about different codeing laguages- Have fun :D</h1>
      </header>
      //#1
      <Card title="Title: React - joke :)" content="This is a joke about React" imageUrl="https://img-9gag-fun.9cache.com/photo/a41DRNv_460s.jpg" />
      //#2
      <Card title="Title: JS - joke :) " content="This is a joke about JS" imageUrl="https://miro.medium.com/v2/resize:fit:810/1*7wcPoKrXNYBZYTvDcHxhhA.png" />
      //#3
      <Card title="Title: TypeScript - joke :) " content="This is a joke about TypeScript" imageUrl="https://preview.redd.it/0xf43gku4fh31.png?auto=webp&s=196354fc2818f3321797dd88540d594d9568dcb9" />
      //#4
      <Card title="Title: NodeJs - joke :) " content="This is a joke about NodeJs" imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--tuZ9u-ZH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/qulbq6dl1svpo6hxmqkl.png" />
      //#5 Best joke XD
      <Card title="Title: CSS - joke :) " content="This is a joke about CSS" imageUrl="https://digitalsynopsis.com/wp-content/uploads/2015/02/css-puns-web-design-funny-jokes-1.jpg" />



      {/*  ***  EXERCISE_1.5 *** */}

      <Academies academies={academies} name="SEDC" />



      {/*  ***  EXERCISE_2 *** */}
<Counter />
    </div>
  );
}

export default App;
