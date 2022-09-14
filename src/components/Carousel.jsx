import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import crud1 from '@/images/photos/CRUD-LIST-1.jpg'
import crud2 from '@/images/photos/CRUD-LIST-2.jpg'
import crud3 from '@/images/photos/CRUD-LIST-3.jpg'
import crud4 from '@/images/photos/CRUD-LIST-4.jpg'
import crud5 from '@/images/photos/CRUD-LIST-5.jpg'
import crud6 from '@/images/photos/CRUD-LIST-6.jpg'
import Image from "next/future/image";



export function CarouselComponent() {
    return (
        <div>
            <Carousel>
                <div>
                    <Image src={crud1} alt="image1"/>
                    <p className="legend">Homepagina</p>

                </div>
                <div>
                    <Image src={crud2} alt="image2"/>
                    <p className="legend">Login formulier</p>

                </div>
                <div>
                    <Image src={crud3} alt="image3"/>
                    <p className="legend">Activiteit toevoegen</p>

                </div>
                <div>
                    <Image src={crud4} alt="image4"/>
                    <p className="legend">Homepagina nieuwe activiteit tonen</p>

                </div>
                <div>
                    <Image src={crud5} alt="image5"/>
                    <p className="legend">Nieuwe activiteit word weer verwijdert</p>

                </div>
                <div>
                    <Image src={crud6} alt="image6"/>
                    <p className="legend">Gebruiker kan hier uitloggen</p>

                </div>
            </Carousel>
        </div>
    );
}
