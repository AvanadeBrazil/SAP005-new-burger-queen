import React from 'react';
import { dictionaryList } from '../../libs/contants';

export const htmlCode = {
    '000': 'Unknown Error',
    '001': dictionaryList['team-work'],
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
};

export const Error = (props) => {
    const { code, message } = props;
    return (
        <div className="error-container">
            <div className="error-code">
                {code || '000'}
            </div>
            <div className="error-message">
                {message || htmlCode[code] || 'Unknown Error'}
            </div>
        </div>
    );

};

