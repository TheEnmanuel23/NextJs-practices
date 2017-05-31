import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => {
    return (
        <li>
            <Link href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )
}

const Index = () => {
    return (
       <Layout>
            <ul>
                <PostLink title="Hello next.js" />
                <PostLink title="Learn Nextjs awesome" />
                <PostLink title="Deploy apps with zeit" />
            </ul>
       </Layout>
    )
}

export default Index