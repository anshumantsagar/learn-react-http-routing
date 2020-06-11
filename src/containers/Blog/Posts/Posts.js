import React from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';

//css
import './Posts.css';

//components
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends React.Component {
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get( '/posts')
            .then(resposne => {
                const posts = resposne.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Anshumant' 
                    }
                })
                this.setState({posts: updatedPosts});
                // console.log(resposne);
            })
            .catch(error => {
                console.log(error);
                //this.setState({error:true})
            });
    }

    postSelectedHandeler = (id) => {
        //this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push('/posts/' + id);
        console.log('clicked')
    }
    
    render () {
        let posts = <p style={{textAlign : 'center' }}>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/posts/' + post.id} >
                        <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={ () => this.postSelectedHandeler(post.id)}/>);
                    // </Link>);
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;