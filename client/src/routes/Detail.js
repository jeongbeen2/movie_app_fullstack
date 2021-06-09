import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

function Detail() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    }
  }, []);

  return <>{location.state ? <span>{location.state.title}</span> : null} </>;
}
export default Detail;
