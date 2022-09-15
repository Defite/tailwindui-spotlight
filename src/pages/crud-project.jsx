import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'
import {CarouselComponent} from '@/components/Carousel'
import Image from "next/future/image";
import crud1 from "@/images/photos/CRUD-LIST-1.jpg";
import crud2 from "@/images/photos/CRUD-LIST-2.jpg";
import crud3 from "@/images/photos/CRUD-LIST-3.jpg";
import crud4 from "@/images/photos/CRUD-LIST-4.jpg";
import crud5 from "@/images/photos/CRUD-LIST-5.jpg";
import crud6 from "@/images/photos/CRUD-LIST-6.jpg";
import React from "react";

function ToolsSection({children, ...props}) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    )
}

function Tool({title, href, children}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    )
}


export default function PhaserProject() {
    return (
        <>
            <Head>
                <title>Hamza Elbarkani | CRUD</title>
                <meta
                    name="description"
                    content="Crud"
                />
            </Head>
            <SimpleLayout
                title="Crud list"
                intro={"Een crud list met een simpele login scherm"}>
                <div className="space-y-20">
                    <ToolsSection>
                        <Tool title="Description">
                            Dit was een school project waarbij je de gebruiker moest ophalen uit de database. En als de
                            gebruiker ingelogd is kan hij een activiteit aanpassen, verwijderen of aanmaken.
                        </Tool>
                        <Tool title="Wat ik geleerd heb">
                            Ik heb geleerd hoe ik een database moet gebruiken en hoe je activiteiten aanmaakt,
                            verwijdert en aanpast en dat je dan het resultaat in de database en op de site ziet.
                        </Tool>
                    </ToolsSection>
                        <Tool title="Final product">
                            <CarouselComponent>
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
                            </CarouselComponent>


                        </Tool>

                </div>
            </SimpleLayout>
        </>
    )
}
