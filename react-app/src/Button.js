import { useCallback } from 'react';
function Button({ title }) {
  const logout = useCallback(() => {
    const redirectURL = '/__catalyst/auth/login';
    window.catalyst.auth.signOut(redirectURL);
  }, []);
  return (
    <div id='logoutbtn' style={{ textAlign: 'inline-block' }}>
      <button onClick={logout} id='logout' style={{ display: 'inline-block' }}>
        {title}
      </button>
    </div>
  );
}
export default Button;
