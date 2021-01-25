import React from "react"
import axios from "axios"
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'




export default class Images extends React.Component {

    state = {
        images: [],
        page: 1

    }

    async componentDidMount() {
        const accessKey = process.env.REACT_APP_ACCESSKEY
        let response = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${this.state.page}`)
        console.log(response)
        this.setState({
            images: response.data
        })
        console.log(this.state.images)
    }

    getMoreImage = async () => {
        const accessKey = process.env.REACT_APP_ACCESSKEY
        this.setState({
            page: this.state.page + 1,
        })
        let response = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${this.state.page}`)
        this.setState({
            images: this.state.images.concat(response.data)
        })
    }

    render() {
        return (

            <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.getMoreImage}
                hasMore={true}
                loader={<h3>loading more awesome pictures...</h3>}>
                <CardColumns className="container">
                    {this.state.images.map(img => (
                        <Card>
                            <Card.Img variant="top" src={img.urls.small} />
                            <Card.Body>
                                <Card.Title>{img.alt_description}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                </CardColumns>

            </InfiniteScroll>

        )//return
    }//render






}