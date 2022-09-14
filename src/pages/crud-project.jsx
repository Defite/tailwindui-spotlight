import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'
import Carousel from "react-responsive-carousel";
import Image from "next/future/image";
import crud1 from "src/images/photos/CRUD-LIST-1.jpg"
import crud2 from "src/images/photos/CRUD-LIST-2.jpg"
import crud3 from "src/images/photos/CRUD-LIST-3.jpg"
import crud4 from "src/images/photos/CRUD-LIST-4.jpg"
import crud5 from "src/images/photos/CRUD-LIST-5.jpg"
import crud6 from "src/images/photos/CRUD-LIST-6.jpg"

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

function App() {
    return (
        <Carousel>
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
        </Carousel>
    )
}

export default function PhaserProject() {
    return (
        <>
            <Head>
                <title>Phaser game</title>
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
                    <ToolsSection title="">
                        <Tool title="Final product">
                       <App>

                       </App>


                        </Tool>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
