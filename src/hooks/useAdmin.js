import { GET_IS_ADMIN_USER } from "./../graphql/queries";
import { useQuery } from "@apollo/client";

const useAdmin = () => {
    const { loading, data } = useQuery(GET_IS_ADMIN_USER);
    return [data?.getAdminUser, loading];
};

export default useAdmin;
