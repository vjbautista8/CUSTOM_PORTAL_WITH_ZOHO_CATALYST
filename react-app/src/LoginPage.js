import { useEffect } from 'react';
function Login() {
  useEffect(() => {
    window.location.href = window.origin + '/__catalyst/auth/login';
  }, []);
  return null;
}
export default Login;
