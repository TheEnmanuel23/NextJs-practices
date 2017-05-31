import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => {
    return (
        <li>
            <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )
}

const Index = () => {
    return (
       <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id='hello-nextjs' title="Hello next.js" />
                <PostLink id='Learn-nextjs-awesome' title="Learn Nextjs awesome" />
                <PostLink id='deploy-next' title="Deploy apps with zeit" />
            </ul>
       </Layout>
    )
}

export default Index