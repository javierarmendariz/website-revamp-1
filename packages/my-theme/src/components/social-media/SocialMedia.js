import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect, styled, fetch } from "frontity";
import { SocialMediaIconsReact } from 'social-media-icons-react';

const SocialMedia = ({ state, actions, libraries }) => {
    // 1. fetch data related to a path
    useEffect(() => {
        actions.source.fetch("/category/social-media/");
    }, []);

    // 2. get data from frontity state
    const data = state.source.get("/category/social-media/");

    // 3. get entities from frontity state
    if (data.isCategory) {
        const { sanitizeString } = libraries.mytheme;

        // the category entity
        // const category = state.source.category[data.id];

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
                            return (
                            <Grid item xs={3} key={post.slug}>
                                <SocialContainer>
                                    <SocialMediaIconsReact
                                        borderColor="rgba(0,0,0,0.25)"
                                        borderWidth="0"
                                        borderStyle="solid"
                                        icon={post.title.rendered}
                                        iconColor="rgba(255,255,255,1)"
                                        backgroundColor="rgba(240,56,56,1)"
                                        iconSize="4"
                                        roundness="0%"
                                            url={sanitizeString(post.content.rendered)}
                                        size="31"
                                    />
                                </SocialContainer>
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

export default connect(SocialMedia);

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0 0 0;
`;
