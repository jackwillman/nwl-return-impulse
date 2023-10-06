import api from '../../../../lib/api';
import config from '../../../../lib/config';

import { CookiesType } from '..';

interface HandleGetUserProps {
    setIsUserGotten : (isGettingUser : boolean) => void;
    setUpdateError : (userError : string) => void;
    setUserEmail : (userEmail : string) => void;
    setUsername : (username : string) => void;
    tokenHeader : string;
    sessionToken : string;
    userId : string;
    cookies : CookiesType;
};

const handleGetUser = function getUserFromServer(
    {
        setIsUserGotten,
        setUpdateError,
        setUserEmail,
        setUsername,
        tokenHeader,
        sessionToken,
        userId,
        cookies
    } : HandleGetUserProps
) {
    setIsUserGotten(false);
    setUpdateError('');
    setUserEmail('');
    setUsername('');

    api.get(config.path.user, { 
        params : {
            id : userId
        },
        headers : {
            [tokenHeader] : sessionToken
        }

    }).then((response) => {
        setUsername(response.data[config.user.username]);
        setUserEmail(response.data[config.user.email])
        
    }).catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            setUpdateError(error.response.data.error);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error: ', error.message);
        }

    }).finally(() => {
        setIsUserGotten(true);
    });
};

export default handleGetUser;