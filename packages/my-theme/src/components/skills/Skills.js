import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect, styled, fetch } from "frontity";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useCardMediaStyles = makeStyles((theme) => ({
    root: {
        height: '190px',
        backgroundSize: '10rem'
    }
}));

const Skills = ({ state, actions, libraries }) => {
    const classesCardMedia = useCardMediaStyles();

    // 1. fetch data related to a path
    useEffect(() => {
        actions.source.fetch("/category/skills");
    }, []);

    // 2. get data from frontity state
    const data = state.source.get("/category/skills/");

    // 3. get entities from frontity state
    if (data.isCategory) {
        const { sanitizeString } = libraries.mytheme;

        // posts from that category
        const posts = data.items.map(
            ({ type, id }) => state.source[type][id]
        );

        // 4. render!
        return (
            <>
                {
                    posts.map(
                        (post) => {
                            const media = state.source.attachment[post.featured_media];
                            return (
                                <Grid item xs={12} sm={6} lg={4} key={post.slug}>
                                    <Paper elevation={3}>
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia
                                                image={media.source_url}
                                                title="Paella dish"
                                                className={classesCardMedia.root}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {post.title.rendered}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p" />
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Paper>
                                </Grid>
                            )
                        }
                    )
                }
            </>
        );
    }

    return null;
};

export default connect(Skills);

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;

`;
