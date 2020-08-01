import React, { Component } from 'react'
import './Section.css'
import axios from 'axios'

const apiKey = 'AIzaSyDNK82U5FJouNwP0IyGTKDafwq5rtMx5pc'

const initialState = {
    list: []
}

export default class Section extends Component {

    state = { ...initialState }

    // componentWillMount() {
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=6&q=${this.props.title}`)
    //         .then(resp =>{
    //             this.setState(({list: resp.data.items}))
    //             console.log(resp.data.items)
    //         })
    // }

    // renderItems() {
    //     return this.state.list.map(video => {
    //         return (
    //             <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target='_blank' rel="noopener noreferrer">
    //                     <img src={video.snippet.thumbnails.medium.url} alt="Thumbnail"/>
    //             </a>
    //         )
    //     })
    // }
    render() {
        return (
            <div className="section">
                <h2 className="section-name">{this.props.title}</h2>
                <div className="carrousel">
                    {/* {this.renderItems()} */}
                </div>
            </div>
        )
    }
}