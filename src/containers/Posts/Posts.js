import React from 'react';
import axios from '../../axios';

//css
import './Posts.css';

//components
import Post from '../../components/Post/Post';

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
        this.setState({selectedPostId:id});
    }
    
    render () {
        let posts = <p style={{textAlign : 'center' }}>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={ () => this.postSelectedHandeler(post.id)}/>
            })
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;