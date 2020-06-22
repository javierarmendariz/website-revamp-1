import React from 'react';
import { connect, styled } from "frontity";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown/with-html'
import SocialMedia from '../social-media/SocialMedia.js'
import Skills from '../skills';

const useDividerStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem 0',
    }
}));

const interest = `
- 🦉 Monorepos with nx.dev
- 📚 JamStack
- 🦖 Typescript
- 😽 Headless CMS
- 🐝 Cypress
- 🐭 Amplify
- 🐶 Hasura
- 👾 Mux
- 😀 Emojis
`;

const Main = ({ state, actions, libraries }) => {
    const classesDivider = useDividerStyles();

    return (
        <>
            <Grid container >
                <Grid container>
                    <Grid item xs={1} sm={4} lg={5} />
                    <Grid item xs={10} sm={4} lg={2}>
                        <Grid container justify="space-around" direction="row">
                            <SocialMedia />
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sm={4} lg={5} />
                </Grid>
            </Grid>

            <Divider className={classesDivider.root} />

            <Grid container>
                <Grid item xs={1} sm={1} lg={3} />
                <Grid item xs={10} sm={10} lg={6}>
                    <Grid container spacing={3}>
                        <Paragraph>
                            <Typography variant="body1" gutterBottom>
                                🤖 I am a Mexican 🇲🇽 Computer Engineer with around 13 years of experience in Web Development. I started programming with PHP, some .Net and Flash. But I have to say Javascript changed my life and my professional career. Now all my development is based on the Javascript's universe 🪐, with one Single Page applications, focused in the Web performance and cross browser compatibility. When it comes to team work 👨‍👨‍👧‍👧, I consider it is the best strategy to reach out any goal. Actually, I live in Los Angeles, California. And I am willing to travel all around the globe, looking for a remote job 🌍!
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                I drink ☕️ and breath the following technologies:
                            </Typography>
                        </Paragraph>
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={1} lg={3} />
            </Grid>

            <Grid container>
                <Grid container>
                    <Grid item xs={1} sm={1} lg={3} />
                    <Grid item xs={10} sm={10} lg={6}>
                        <Grid container spacing={3}>
                            <Skills />
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sm={1} lg={3} />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={1} sm={1} lg={3} />
                <Grid item xs={10} sm={10} lg={6}>
                    <Grid container spacing={3}>
                        <Paragraph>
                            <Typography variant="body1" gutterBottom>
                                And I am now studing the following things:
                            </Typography>
                            <ReactMarkdown source={interest} />
                            <Typography variant="body1" gutterBottom>
                                Please email me if you have a project where we can both collaborate ✌🏾
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                By the way, this page is powered by <a href="https://frontity.org/" target="_blank">Frontity.org</a>
                            </Typography>
                        </Paragraph>
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={1} lg={3} />
            </Grid>
        </>
    );
};

export default connect(Main);

const Paragraph = styled.span`
    margin: 3rem 0;
`;
