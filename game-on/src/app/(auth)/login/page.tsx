

  import '../../styles/login.css';
  export const metadata = {
    title:'Login'
  }
  export default function LoginPage() {
    return (
      <div className="login-page">
        <div className="login-card">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p className="note">* This form doesn’t actually submit anything yet.</p>
        </div>
      </div>
    );
  }