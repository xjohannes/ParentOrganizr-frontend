import { getServerSideProps } from '../../lib/data';

export default async function Page () {
    const { props: { posts}    } = await getServerSideProps();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
CHANGE WATCHES
            {posts.length === 0 && <li>No posts</li>}
            {posts && (
                <div>
                    <h2>Watches</h2>
                    <ul>
                        {posts.map((post: IPost) => (
                            <li key={post.id}><p>{post.title}</p></li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}
