import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'
import phasersc from '@/images/photos/phaser-sc.jpg'

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
                <title>Phaser game</title>
                <meta
                    name="description"
                    content="Game"
                />
            </Head>
            <SimpleLayout
                title="Phaser game"
                intro={"Dit was eerste persoonlijke project."}>
                <div className="space-y-20">
                    <ToolsSection title="Start">
                        <Tool title="Description">
                            Dit is mijn eerste persoonlijke project het is een platform game waarbij je sterren moet
                            verzamelen en je punten omhoog moet halen.

                        </Tool>
                        <Tool title="Wat ik geleerd heb">
                            Ik heb geleerd om een simpele game te maken en aan te passen. Ook heb ik met een API voor
                            het eerst gewerkt. Het was een leuke en leerzame project.
                        </Tool>

                    </ToolsSection>
                    <ToolsSection title="">

                        <Tool title="Final product">
                            <img src={"phasersc"}/>
                            Dit is dan het eind product waar je sterren kan verzamelen en "spikes" moet ontwijken.
                        </Tool>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
