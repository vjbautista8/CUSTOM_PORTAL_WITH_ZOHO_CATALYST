import LoginPage from './LoginPage.js';
import Button from './Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [crmContactData, setCrmContactData] = useState([]);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    mailid: '',
    timeZone: '',
    createdTime: '',
  });

  useEffect(() => {
    window.catalyst.auth
      .isUserAuthenticated()
      .then(async (result) => {
        let userDetails = {
          firstName: result.content.first_name,
          lastName: result.content.last_name,
          mailid: result.content.email_id,
          timeZone: result.content.time_zone,
          createdTime: result.content.created_time,
        };
        setUserDetails(userDetails);
        setIsUserAuthenticated(true);
        setIsFetching(true);
        axios
          .get(
            `/server/crm_crud/contactData/search?id=${result.content.email_id}`
          )
          .then((response) => {
            console.log(response.data);
            if (response.data) setCrmContactData(response.data.data);
          })
          .catch((error) => {
            console.error('Error:', error);
          })
          .finally(() => {
            setIsFetching(false);
          });
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      {isFetching ? (
        <p>Loading ….</p>
      ) : isUserAuthenticated ? (
        <>
          <h1>
            {(crmContactData.length > 0 &&
              `Welcome ${crmContactData[0]['Email']}`) ||
              'Access Denied. Please contact the Administrator'}
          </h1>
          <Button title='Logout'> </Button>
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}
export default Layout;
