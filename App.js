import BlogList from './Components/Bloglist';
import Navbar from './Navbar';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NewBlog from './Components/Newblog';
import BlogContent from './Components/BlogContent';

function App() {
  
  return (
      <Router>
            <div className="App">
              <Navbar/>
              <Switch>
                    <Route exact path="/"><BlogList/></Route>
                    <Route path="/blogcontent/:id" component={BlogContent} />
                    <Route path="/newblog"><NewBlog/></Route>
              </Switch>
            </div>
      </Router>
  );
}

export default App;
