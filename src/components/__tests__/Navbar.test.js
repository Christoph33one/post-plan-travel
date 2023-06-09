import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min"
import NavBar from "../NavBar"
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

// Test NavBar rendering signin link with matching title SIGNIN
test("renders Navbar", () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );
    // screen.debug();
    const signInLink = screen.getByRole('link', {name: 'SIGN IN'})
    expect(signInLink).toBeInTheDocument(); 
});

// Test NavBar rendering homepage link with matching title HOME
test("renders HomePAGE", () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );
    // screen.debug();
    const signInLink = screen.getByRole('link', {name: 'HOME'})
    expect(signInLink).toBeInTheDocument(); 
});

// Test renders link to the user profile for a logged in user
test("renders link to the user profile for a logged in user", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );
    const profileAvatar = await screen.findByText("Profile");
    expect(profileAvatar).toBeInTheDocument();
  });
 
  // Test renders Sign in and Sign up buttons again on log out
  test("renders Sign in and Sign up buttons again on log out", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );
    const signOutLink = await screen.findByRole("link", { name: "SIGN OUT" });
    fireEvent.click(signOutLink);
  
    const signInLink = await screen.findByRole("link", { name: "SIGN IN" });
    const signUpLink = await screen.findByRole("link", { name: "SIGN UP" });
  
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  }); 

