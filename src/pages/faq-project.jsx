import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'
import Image from "next/future/image";
import FAQ from "/src/images/photos/FAQ-project.png"


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
                <title>Hamza Elbarkani | FAQ</title>
                <meta
                    name="description"
                    content="FAQ"
                />
            </Head>
            <SimpleLayout
                title="FAQ page"
                intro={"Een FAQ page met collapsible gemaakt"}>
                <div className="space-y-20">
                    <ToolsSection>
                        <Tool title="Description">
                            Een simpele school project waarbij je een FAQ pagina moest maken voor een bestaande website.
                            Je moest ervoor zorgen dat de antwoorden uitklappen als je op het vraag klikt of op een "+"
                            klikt.
                        </Tool>
                        <Tool title="Wat ik geleerd heb">
                            Ik heb geleerd wat een collapsible is en hoe je die kan gebruiken.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="">
                        <Tool title="Final product">
                            <Image src={FAQ} className="rounded-2xl"/>


                        </Tool>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
