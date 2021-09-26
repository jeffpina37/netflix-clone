import React from 'react';
import Banner from './Banner';
import './homescreen.css';
import Nav from './Nav';
import requests  from '../Request';
import Row from './Row'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav/>
            <Banner/>
            <Row
                title='NETFLIX ORIGINAL'
                fetchUrl={requests.fetchNetflixOrginals}
                isLargeRow
            />
            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
                isLargeRow
            />
            <Row
                title='Action Moives'
                fetchUrl={requests.fetchActionMovies}
                isLargeRow
            />
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
                isLargeRow
            />
            <Row
                title='Horror Moives'
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow
            />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
                isLargeRow
            />
            <Row
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
                isLargeRow
            />
        </div>
    )
}

export default HomeScreen
