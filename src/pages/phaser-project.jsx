import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'
import PropTypes from "prop-types";

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

function Video(props) {
    return null;
}

Video.propTypes = {
    width: PropTypes.string,
    preload: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node
};
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
                intro={"Dit was mijn eerste persoonlijke project."}>
                <div className="space-y-20">
                    <ToolsSection>
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
                            Dit is dan het eind product waar je sterren kan verzamelen en "spikes" moet ontwijken.
                            {/*<Image src={phasersc}*/}
                            {/*       alt=""*/}
                            {/*       sizes="(min-width: 640px) 18rem, 11rem"*/}
                            {/*       className="rounded-3xl"/>*/}

                            <video width="750" height="500" controls>
                                <source src="/public/Videos/phaser-game.mp4" type="video/mp4"/>
                                Your browser does not support this video...
                            </video>
                        </Tool>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
