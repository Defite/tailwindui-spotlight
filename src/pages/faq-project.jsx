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
                title="FAQ page"
                intro={"Een FAQ page met collapsible gemaakt"}>
                <div className="space-y-20">
                    <ToolsSection title="Start">
                        <Tool title="Description">
                        </Tool>
                        <Tool title="Wat ik geleerd heb">
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
