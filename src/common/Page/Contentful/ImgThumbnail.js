import React from 'react'
import './styles.scss';



function ImgThumbnail({ title, src, link }) {




	return (


	        <div>

                        <div className="hover-title">
                                <a href={title} target="_blank" rel="noopener noreferrer">{link}</a>
                              
                        </div>
                  
                        <div className="hover-image">
              
                                <img src={src}/>
                        </div>


			
		</div>
	)
}

export default ImgThumbnail