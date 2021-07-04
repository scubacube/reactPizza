import React from 'react';
import ContentLoader from "react-content-loader";

export const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="124" r="120" />
            <rect x="0" y="288" rx="4" ry="4" width="280" height="28" />
            <rect x="0" y="328" rx="4" ry="4" width="280" height="66" />
            <rect x="2" y="404" rx="6" ry="6" width="102" height="50" />
            <rect x="133" y="401" rx="17" ry="17" width="143" height="54" />
        </ContentLoader>
    )
}