import DayList from './component/DayList';
import Header from "./component/Header";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import {BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path = "/">
              <DayList />
            </Route>
            {/* :day를 붙여주면 day뒤에 있는 변수를 day라는 변수에 담아서 사용할 수 있음. */}
            <Route path = "/day/:day"> 
              <Day />
            </Route>
            {/* 위의 조건들을 만족하지 않을 경우 EmptyPage 출력 */}
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
