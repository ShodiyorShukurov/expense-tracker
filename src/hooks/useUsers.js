import React from "react";
import apiClient from "../service/api-client";

const useUser = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    setIsLoading(true)
    apiClient.get('/users').then((res) => {
        console.log(res)
        setUsers(res.data);
        setIsLoading(false);
    }).catch((err) => {
        setIsLoading(false);
        setError(err.message);
    });
  }, []);

  return {users, isLoading, error}
};

export default useUser;