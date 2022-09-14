import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'

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
                title="Zoekmachine"
                intro={"Een zoekmachine voor een tabel uit een database"}>
                <div className="space-y-20">
                    <ToolsSection>
                        <Tool title="Description">
                            Een school project waarbij je de database moest inladen en vervolgens een zoekfunctie in zitten zodat je de benodigde informatie zoeken. Het werkt met het hele zin of alleen stuk ervan.
                        </Tool>
                        <Tool title="Wat ik geleerd heb">
                            Ik heb geleerd hoe je een simpele zoekfunctie creëert.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="">
                        <Tool title="Final product">
                        </Tool>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
