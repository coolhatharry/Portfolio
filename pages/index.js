import Head from "next/head"

// import Header from "../components/Header"
import Main from "../components/Main"
import * as React from 'react';
// import Footer from "../components/Footer"


class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>- Corey J. Lee -</title>
                </Head>

                <div id="wrapper">
                    {/*<Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout}/>*/}
                    <Main/>
                    {/*<Footer timeout={this.state.timeout}/>*/}
                </div>
                <div id="bg"/>
                <style jsx>{`
                #bg {
                    background-image: url("/static/images/black-white-mountain.jpg");
                    background-size: cover;
                    height: 100vh;
                    overflow: hidden;
                    z-index: 1;
                }
                `}</style>
            </div>
        )
    }
}

export default IndexPage
