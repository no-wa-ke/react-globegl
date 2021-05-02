
import React from 'react';
import {
        FacebookShareButton,
        FacebookIcon,
        TwitterShareButton,
        TwitterIcon,
      } from 'next-share'
      

    


const Blog = () => {
        return (


        <FacebookShareButton
                url={'https://github.com/next-share'}
                quote={'next-share is a social share buttons plugin for React apps.'}
                hashtag={'#nextshare'}
        >
        <FacebookIcon  size={32} round />
        </FacebookShareButton>





        );
      };
      export default Blog;