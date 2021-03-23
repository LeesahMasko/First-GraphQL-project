import React from 'react';
import { AUTH_TOKEN, LINKS_PER_PAGE } from '../constants';

const Link = (props) => {
    const { link } = props;
    const authToken = localStorage.getItem(AUTH_TOKEN)

    const take = LINKS_PER_PAGE;
    const skip = 0;
    const orderBy = { createdAt: 'desc' };

    return (
        <div>
            <div>
                {link.description} ({link.url})
            </div>
        </div>
    );
};

export default Link;
