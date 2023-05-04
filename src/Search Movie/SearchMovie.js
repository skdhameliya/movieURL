import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Constants } from '../CONSTANTS.js'

const SearchMovie = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const name1 = queryParameters.get("name1")

    const [movie, setMovie] = useState([])

    useEffect(() => {

        // let data = '';
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${Constants.serverURL}/product/${name1}`,
            headers: { },
            // data : data
        };

        axios.request(config)
        .then((response) => {
           
            /*

            let random = Math.floor(Math.random() * 5);
            let movies = [
                "https://drive.google.com/file/d/10kr103KTCUnhkc3iIylmQpBBLhbLxJiP/preview",
                "https://drive.google.com/file/d/1hkMfp7QsauBj0Q0TjHDmJtqXity5T25H/preview",
                "https://drive.google.com/file/d/1lSkflqbDEtMRyXXsn_o_VwEi0Jo4sG2_/preview",
                "https://drive.google.com/file/d/1rxekxYu79lOXrb07DZFRtZkWMb-0hJX2/preview",
                "https://drive.google.com/file/d/1UsfTMmRHuSdKHnYTRnD3IpyGgiaW7eq5/preview"
            ]
            setMovie(movies[random])
            
            */
            setMovie(response.data[0])
        })
        .catch((error) => {
            console.log(error);
        });

    }, []);

  return (
    <>
        {
            movie.length !== 0 && <div className="container mt-5">
                {/* <h1 className='mt-5 text-center'>Yo Movies</h1> */}
                <div className="row justify-content-md-center text-center mt-5">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <h1>{movie.title}</h1>
                        <iframe src={`${movie.download_link}`} width="100%" height="400vh" allow="autoplay" allowFullScreen></iframe>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        }
    </>
  )
}

export default SearchMovie