import React from 'react';
import { Link, RoutingState } from 'buttermilk';

const NotFound = ({ routing }) => (
    <section>
        <h2>Oh noes, a 404 page!</h2>
        <RoutingState>
            {routing => (
                <p>
                    No page was found with the path: <code>{routing.location.pathname}</code>
                </p>
            )}
        </RoutingState>
        <p>
            <Link href="/">Let's go back home.</Link>
        </p>
    </section>
);

export default NotFound; 