import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'
import {CarouselComponent} from "@/components/Carousel";
import {Carousel} from "react-responsive-carousel";
import Image from "next/future/image";
import Searching from "src/images/photos/Searching.jpg";
import Searched from "@/images/photos/Searched.jpg"
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
                <title>Hamza Elbarkani | Search engine</title>
                <meta
                    name="description"
                    content="Searching"
                />
            </Head>
            <SimpleLayout
                title="Zoekmachine"
                intro={"Een zoekmachine voor een tabel uit een database"}>
                <div className="space-y-20">
                    <ToolsSection>
                        <Tool title="Description">
                            Een school project waarbij je de database moest inladen en vervolgens een zoekfunctie in
                            zetten zodat je de benodigde informatie zoeken. Het werkt met het hele zin of alleen stuk
                            ervan.
                        </Tool>
                        <Tool title="Wat ik geleerd heb">
                            Ik heb geleerd hoe je een simpele zoekfunctie creëert.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="">
                        <Tool title="Final product">
                            <Tool title="Final product">
                                <CarouselComponent>
                                    <div>
                                        <Image src={Searching}/>
                                        <p className="legend">Homepagina</p>

                                    </div>
                                    <div>
                                        <Image src={Searched}/>
                                        <p className="legend">Zoekfunctie aangesproken  </p>

                                    </div>

                                </CarouselComponent>

                            </Tool>
                        </Tool>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
