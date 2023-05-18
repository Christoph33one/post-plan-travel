import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import TravelPostPage from "./pages/posts/TravelPostPage";




function App() {
  return (
  
    <div className={styles.App}> 
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>MAIN PAGE</h1>} />
          <Route exact path="/locations" render={() => <h1>LOCATIONS</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <TravelPostPage />} />
          <Route render={()=><p>Page not found!</p> } />
        </Switch>
      </Container>
    </div>
   
  );
}

export default App;   