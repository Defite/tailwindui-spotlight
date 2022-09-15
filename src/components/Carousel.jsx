import React, {Children, Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';



export function CarouselComponent({children}) {

    return (
        <div>
            <Carousel>
                {children}

            </Carousel>
        </div>
    );
}
