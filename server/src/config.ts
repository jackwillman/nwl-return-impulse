import 'dotenv/config';

const config = {
    port : process.env.PORT || 3333,
    jsonSizeLimit : '1mb',
    token : {
        headerName : 'x-access-token',
        renewedHeaderName : 'x-access-token-renewed',
        expirationTime : 15 * 60 * 1000,
        renewalPeriod : 3 * 60 * 60 * 1000
    },
    secrets : {
        JWT_SECRET : process.env.JWT_SECRET
    }
};

export default config;