import React, { Component } from "react";
import TeamMember from "./TeamMember";

const data = [
    {
        avatar:
            "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-1.jpg",
        name: "Sarah Stuart",
        role: "Co-founder",
        social: [
            {
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                google: "https://google.com",
                pinterest: "https://pinterest.com",
            },
        ],
        id: "1",
    },
    {
        avatar:
            "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-2.jpg",
        name: "John Doe",
        role: "Managing Director",
        social: [
            {
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                google: "https://google.com",
                pinterest: "https://pinterest.com",
            },
        ],
        id: "2",
    },
    {
        avatar:
            "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-3.jpg",
        name: "Jessica Branson",
        role: "Reviewer",
        social: [
            {
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                google: "https://google.com",
                pinterest: "https://pinterest.com",
            },
        ],
        id: "3",
    },
    {
        avatar:
            "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/person-4.jpg",
        name: "Sarah Stuart",
        role: "Consultant",
        social: [
            {
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                google: "https://google.com",
                pinterest: "https://pinterest.com",
            },
        ],
        id: "4",
    },
];

export class OurTeam extends Component {
    render() {
        let url = "";
        const aStyle = {
            color: "#84878d",
            textDecoration: "none",
            fontSize: "15px",
			margin: 5,
			
        };

        return (
            <>
                <div
                    style={{
                        display: "flex",
                        width: 1110,
                        margin: "0 auto",
                        background: "white",
						padding: 30,
						
                    }}
                >
                    <img
                        style={{ width: 350, height: 280 }}
                        src={
                            "https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/figure.jpg"
                        }
                        alt="ggg"
                    />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0 auto",
                            background: "white",
                            padding: "0 20px 0 20px",
							height: 280,
							
                        }}
                    >
                        <p
                            style={{
                                fontSize: "1.7333333333em",
                                fontWeight: 300,
                                color: "black",
                                lineHeight: "normal",
                            }}
                        >
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium totam.
                        </p>
                        <p
                            style={{
                                color: "#84878d",
                                fontSize: "15px",
                                fontWeight: 400,
                                lineHeight: "normal",
                            }}
                        >
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                            quia dolor sit consectetur adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                            quam.
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: 1110,
                        margin: "0 auto",
                        background: "white",
                        padding: 30,
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", background: "white" }}>
                        <p
                            style={{
                                fontSize: "1.7333333333em",
                                fontWeight: 300,
                                color: "black",
                                lineHeight: "normal",
                                margin: 0,
                            }}
                        >
                            Vision & Misssion
                        </p>
                        <p
                            style={{
                                color: "#84878d",
                                fontSize: "15px",
                                fontWeight: 400,
                                lineHeight: "normal",
                            }}
                        >
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                        </p>
                        <p
                            style={{
                                color: "#84878d",
                                fontSize: "15px",
                                fontWeight: 400,
                                lineHeight: "normal",
                            }}
                        >
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                            reprehenderit qui in ea voluptate velit esse quam dignissimos ducimus
                            qui blanditiis praesentium voluptatum atque.
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            background: "white",
                            width: "900px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "2em",
                                fontWeight: 300,
                                margin: "0 0 20px",
                                color: "black",
                                lineHeight: "normal",
                            }}
                        >
                            Useful Links
                        </h2>

                        <a style={aStyle} href={url}>
                            Eiusmod tempor incididunt
                        </a>
                        <a style={aStyle} href={url}>
                            Tenim ad minim venia
                        </a>
                        <a style={aStyle} href={url}>
                            Quis nostrud exercitation
                        </a>
                        <a style={aStyle} href={url}>
                            Ullamco laboris reprehenderit
                        </a>
                        <a style={aStyle} href={url}>
                            Duis aute dolor voluptat
                        </a>
                        <a style={aStyle} href={url}>
                            Velit esse cillum dolore
                        </a>
                        <a style={aStyle} href={url}>
                            Excepteur sint occaeca
                        </a>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        width: 1110,
                        margin: "0 auto",
                        background: "white",
                        padding: 30,
                    }}
                >
                    {data.map((elem) => (
                        <TeamMember person={elem} key={elem.id} />
                    ))}
                </div>
            </>
        );
    }
}

export default OurTeam;
